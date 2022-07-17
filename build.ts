import { pageGen } from './pagegen.tsx';
import { compile } from 'mdx2';

import { encode } from 'base64';

import { ensureFile } from 'https://deno.land/std@0.147.0/fs/mod.ts';
import gfm from 'https://esm.sh/remark-gfm@3.0.1';
import remarkFrontmatter from 'https://esm.sh/remark-frontmatter@4?bundle';

// 태그 파싱, 작업중

const metaTagParsing = (rawTexts: string[]) => {
  let flag = false;
  let tags: string[] = [];
  let description = '';
  rawTexts.map((text) => {
    if (text === '---' || text.slice(0, 3) === '---') {
      flag = !flag;
    }
    if (flag) {
      const splitBlocks = text.split(':');
      const keyword = splitBlocks[0];
      if (keyword === 'tags') {
        tags = splitBlocks[1]
          .split('#')
          .slice(1)
          .map((a) => a.trim());
      }
      if (keyword === 'description') {
        description = splitBlocks[1].trim();
      }
    }
  });
  return [tags, description];
};

const hardEnter = (rawTexts: string[]) => {
  let isCodeBlock = false;
  let alreadyCodeBlockDeclare = false;
  return rawTexts
    .map((text) => {
      const reqForPasing = /```/;
      if (reqForPasing.test(text)) {
        if (!isCodeBlock) {
          isCodeBlock = true;
          const codeFileName = text.split(' ')[1];
          // console.log(codeFileName);
          let result = ``;
          if (!alreadyCodeBlockDeclare) {
            result += `import CopyCode from '@/islands/CopyCode.tsx';\n\n<CopyCode />\n\n${text}`;
            alreadyCodeBlockDeclare = true;
          } else result += `<CopyCode />\n\n${text}`;

          return result;
        }
        if (isCodeBlock) isCodeBlock = false;
      }

      if (text.length === 0 && !isCodeBlock) return '\n';
      else return `${text}  `;
    })
    .join('\n');
};

const mdxParsingForCodeBlock = () => {};

//mdx파일을 읽어서

const removeExportCodeToComplied = (compiled: string) => {
  return compiled
    .split('\n')
    .filter((line) => {
      return line !== 'export default MDXContent;';
    })
    .join('\n');
};
interface newDB {
  [key: string]: object;
}
export const buildMdx = async () => {
  const baseDir = 'blog';
  console.time('mdx build time ');
  const dirs = ['posts', 'notes'];
  await ensureFile(`./mdxIndex.json`);
  let newDB: newDB = {};

  const db = JSON.parse(await Deno.readTextFile('./mdxIndex.json'));

  const fileNames: any = {
    posts: [],
    notes: [],
  };
  const promises = dirs.map(async (dir) => {
    const path = `./${baseDir}/${dir}`;

    // mdx파일의 데이터 값을 가져오기
    // 해당 파일로 있는 jsx파일이 있는지 찾기
    // code 복사 기능 넣기, 그렇다면 코드 하이 라이팅 + 카피 기능을 넣어야 함
    // ``` ``` 이건 파싱을 한다 하더라고 코드하이라이팅은 어떻게 하지??
    // 가능성이 떨어짐, fresh 프레임워크에서 인터렉션이 가능한건 island 폴더뿐인데 여기서는 children를 받지 못함
    // 그럼 형제 노드로 가야하나?? 형제 노드로 간다 쳐도, 아이콘은 코드안에 존재 해야하는데 그게 되나??
    // 파싱할때 ``` 마크다운 위에 컴포넌트를 집어 넣으면 될듯 해서 구현 성공을 한듯 하다.
    for await (const dirEntry of Deno.readDir(path)) {
      const readFileName = `${path}/${dirEntry.name}`;
      const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
      const rawTexts = body.split('\n');
      const [tags, description] = metaTagParsing(rawTexts);
      console.log(tags, description);
      const fileStat = await Deno.stat(`${path}/${dirEntry.name}`);
      const encodeFileName = encode(dirEntry.name.split('.')[0]);
      const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.tsx`;

      const fileInfo = {
        title: dirEntry.name,
        tags,
        description,
        path: forWriteFileName,
        atime: fileStat.atime,
        mtime: Date.parse(fileStat.mtime || new Date()),
        birthtime: fileStat.birthtime,
      };
      // console.log(fileInfo);
      fileNames[dir].push(encodeFileName);

      newDB = {
        ...newDB,
        [dir]: { ...newDB[dir], [encodeFileName]: fileInfo },
      };

      // console.log(removeExportCodeToComplied(String(compiled.value)));
      // await Deno.writeTextFile(`./routes/blog/posts/test.jsx`, page);

      // console.log(evalFile.default);
      // const encodeFileName = encode(dirEntry.name.split('.')[0]);
      // const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      // console.log(hashFileName, string);
      // console.log(Deno.statSync(`${path}/${dirEntry.name}`));
      // console.log(dirEntry.name);

      await ensureFile(forWriteFileName);
      const exisFileContent = await Deno.readFile(forWriteFileName);
      // console.log(`./routes/blog/${dir}/${encodeFileName}.jsx`);
      const existsFileEditedTime = db[dir][encodeFileName]?.mtime || 0;

      if (
        String(existsFileEditedTime) !== String(fileInfo.mtime) ||
        exisFileContent.length === 0
      ) {
        const enterBody = hardEnter(rawTexts);

        const compiled = await compile(enterBody, {
          jsxImportSource: 'preact',
          remarkPlugins: [gfm, remarkFrontmatter],
        });

        const page = pageGen(
          removeExportCodeToComplied(String(compiled.value))
        );
        await Deno.writeTextFile(forWriteFileName, page);
      }

      // // }
    }
  });

  await Promise.all(promises);
  await Deno.writeTextFile(`./mdxIndex.json`, JSON.stringify(newDB));
  const removeFilePromises = dirs.map((dir) => {
    Object.keys(db[dir]).map(async (key) => {
      if (Object.keys(newDB[dir]).includes(key) === false) {
        const name = db[dir][key].path;
        await Deno.remove(name);
        console.log(name);
      }
    });
  });

  await Promise.all(removeFilePromises);
  console.log('end');

  console.timeEnd('mdx build time ');
};

// buildMdx();
