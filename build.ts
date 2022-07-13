import { pageGen } from './pagegen.tsx';
import { compile, run, evaluate } from 'mdx2';

import { decode, encode } from 'base64';

import { exists, ensureFile } from 'https://deno.land/std@0.147.0/fs/mod.ts';
import gfm from 'https://esm.sh/remark-gfm@3.0.1';
// import { add } from './Test/bindings/bindings.ts';
import * as preactJsx from 'https://esm.sh/preact@10.9.0/jsx-runtime';
import remarkFrontmatter from 'https://esm.sh/remark-frontmatter@4?bundle';
// Open a database
// Open a database

// Run a simple query

// 태그 파싱, 작업중
const metaTagParsing = (rawTexts: string[]) => {
  let flag = false;
  let tags: string[] = [];
  rawTexts.map((text) => {
    if (text === '---' || text.slice(0, 3) === '---') {
      flag = !flag;
    }
    if (flag) {
      const splitBlocks = text.split(':');
      if (splitBlocks[0] === 'tags') {
        tags = splitBlocks[1]
          .split('#')
          .slice(1)
          .map((a) => a.trim());
      }
    }
  });
  return tags;
};

const hardEnter = (rawTexts: string[]) => {
  const a = rawTexts
    .map((text) => {
      if (text.length === 0) return '\n';
      else return `${text}  `;
    })
    .join('\n');
  return a;
};

const removeExportCodeToComplied = (compiled: string) => {
  compiled.split('\n').map((line) => {
    console.log(line === 'export default MDXContent;');
  });
};

export const buildMdx = async () => {
  const baseDir = 'blog';
  console.time('mdx build time ');
  const dirs = ['posts', 'notes'];
  await ensureFile(`./mdxIndex.json`);
  let newDB = {};

  let db = JSON.parse(await Deno.readTextFile('./mdxIndex.json'));

  const fileNames: any = {
    posts: [],
    notes: [],
  };
  const promises = dirs.map(async (dir) => {
    const path = `./${baseDir}/${dir}`;

    const dirObj = {
      [dir]: '',
    };

    // mdx파일의 데이터 값을 가져오기
    // 해당 파일로 있는 jsx파일이 있는지 찾기
    // 만약 없는 mdx파일이
    for await (const dirEntry of Deno.readDir(path)) {
      const readFileName = `${path}/${dirEntry.name}`;
      const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
      const rawTexts = body.split('\n');
      const tags = metaTagParsing(rawTexts);

      const enterBody = hardEnter(rawTexts);

      const fileStat = await Deno.stat(`${path}/${dirEntry.name}`);
      const encodeFileName = encode(dirEntry.name.split('.')[0]);
      const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      const fileInfo = {
        title: readFileName,
        tags,
        path: forWriteFileName,
        atime: fileStat.atime,
        mtime: Date.parse(fileStat.mtime),
        birthtime: fileStat.birthtime,
      };
      fileNames[dir].push(encodeFileName);

      newDB = {
        ...newDB,
        [dir]: { ...newDB[dir], [encodeFileName]: fileInfo },
      };

      const compiled = await compile(enterBody, {
        jsxImportSource: 'preact',
        remarkPlugins: [gfm, remarkFrontmatter],
      });
      const evalFile = await evaluate(enterBody, {
        ...preactJsx,
        remarkPlugins: [gfm, remarkFrontmatter],
        useDynamicImport: true,
      });
      const page = pageGen(compiled);
      removeExportCodeToComplied(String(compiled.value));
      // await Deno.writeTextFile(`./routes/blog/posts/test.jsx`, page);

      // console.log(evalFile.default);
      // const encodeFileName = encode(dirEntry.name.split('.')[0]);
      // const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      // console.log(hashFileName, string);
      // console.log(Deno.statSync(`${path}/${dirEntry.name}`));
      // console.log(dirEntry.name);

      const isFile = await ensureFile(
        `./routes/blog/${dir}/${encodeFileName}.jsx`
      );
      // console.log(`./routes/blog/${dir}/${encodeFileName}.jsx`);

      const existFile = await Deno.readTextFile(forWriteFileName);
      // console.log(
      //   String(db[dir][encodeFileName].mtime),
      //   String(fileInfo.mtime),
      //   db[dir][encodeFileName].mtime === String(fileInfo.mtime)
      // );
      // await Deno.writeTextFile(
      //   `./routes/blog/${dir}/${encodeFileName}.jsx`,
      //   compiled
      // );
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

  console.timeEnd('mdx build time ');
};

buildMdx();
