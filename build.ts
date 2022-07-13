import { compile } from 'mdx2';

import { decode, encode } from 'base64';

import { exists, ensureFile } from 'https://deno.land/std@0.147.0/fs/mod.ts';
import * as gfm from 'https://esm.sh/remark-gfm@3.0.1';
// import { add } from './Test/bindings/bindings.ts';

const baseDir = './blog/';

// Open a database
// Open a database

// Run a simple query

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
      const fileStat = await Deno.stat(`${path}/${dirEntry.name}`);

      const encodeFileName = encode(dirEntry.name.split('.')[0]);
      const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      const fileInfo = {
        title: readFileName,
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
        remarkPlugins: [gfm],
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
