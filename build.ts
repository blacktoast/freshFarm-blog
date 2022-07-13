import { compile, run, evaluate } from 'mdx2';

import { decode, encode } from 'base64';

import { exists, ensureFile } from 'https://deno.land/std@0.147.0/fs/mod.ts';
import * as gfm from 'https://esm.sh/remark-gfm@3.0.1';
// import { add } from './Test/bindings/bindings.ts';
import * as yaml from 'https://esm.sh/js-yaml@4.1.0';
import * as pre from 'https://esm.sh/preact@10.9.0/jsx-runtime';
const baseDir = './blog/';
import remarkFrontmatter from 'https://esm.sh/remark-frontmatter@4?bundle';
import * as ymljs from 'https://esm.sh/js-yaml@4.1.0';
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
  console.log(tags);
  return tags;
};

export const buildMdx = async () => {
  console.time('mdx build time ');
  const dirs = ['posts', 'notes'];
  //먼자 한글파일부터 되는지 보자
  await ensureFile(`./mdxIndex.json`);
  let newDB = {};

  let db = JSON.parse(await Deno.readTextFile('./mdxIndex.json'));
  const fileNames: any = {
    posts: [],
    notes: [],
  };
  const promises = dirs.map(async (dir) => {
    const path = `./blog/${dir}`;

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

      const fileStat = await Deno.stat(`${path}/${dirEntry.name}`);
      const encodeFileName = encode(dirEntry.name.split('.')[0]);
      const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      const fileInfo = {
        title: readFileName,
        tags,
        path: forWriteFileName,
        atime: fileStat.atime,
        mtime: fileStat.mtime,
        birthtime: fileStat.birthtime,
      };
      fileNames[dir].push(encodeFileName);
      // console.log(
      //   db[dir][encodeFileName].mtime,
      //   fileStat.mtime,
      //   JSON.stringify(db[dir][encodeFileName].mtime) ===
      //     JSON.stringify(fileStat.mtime)
      // );
      newDB = {
        ...newDB,
        [dir]: { ...newDB[dir], [encodeFileName]: fileInfo },
      };

      // console.log('object');
      // console.log(db[encodeFileName] === undefined);
      // console.log(db);
      // console.log(typeof fileStat.mtime, `${path}/${dirEntry.name}`);

      const compiled = await compile(body, {
        jsxImportSource: 'preact',
        remarkPlugins: [gfm, remarkFrontmatter],
      });

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
      if (JSON.stringify(existFile) !== JSON.stringify(compiled.value)) {
        await Deno.writeTextFile(
          `./routes/blog/${dir}/${encodeFileName}.jsx`,
          compiled
        );
      }
    }
  });

  await Promise.all(promises);
  await Deno.writeTextFile(`./mdxIndex.json`, JSON.stringify(newDB));
  console.log(newDB);
  // const removeFilePromises = dirs.map((dir) => {
  //   Object.keys(db[dir]).map(async (key) => {
  //     if (Object.keys(newDB[dir]).includes(key) === false) {
  //       const name = db[dir][key].path;
  //       await Deno.remove(name);
  //       console.log(name);
  //     }
  //   });
  // });
  // await Promise.all(removeFilePromises);

  console.timeEnd('mdx build time ');
};

buildMdx();
