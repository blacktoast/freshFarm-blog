import { compile } from 'mdx2';

import { decode, encode } from 'base64';

import { exists, ensureFile } from 'https://deno.land/std@0.147.0/fs/mod.ts';
import * as gfm from 'https://esm.sh/remark-gfm@3.0.1';

const baseDir = './blog/';

export const buildMdx = async () => {
  console.time('mdx build time ');
  const dirs = ['posts', 'notes'];
  //먼자 한글파일부터 되는지 보자
  await ensureFile(`./test.json`);
  let db = JSON.parse(await Deno.readTextFile('./test.json'));
  console.log(db);
  const promises = dirs.map(async (dir) => {
    const path = `./blog/${dir}`;
    for await (const dirEntry of Deno.readDir(path)) {
      const readFileName = `${path}/${dirEntry.name}`;
      const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
      const fileStat = await Deno.stat(`${path}/${dirEntry.name}`);
      await ensureFile(`./test.json`);

      const encodeFileName = encode(dirEntry.name.split('.')[0]);
      const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      const test = {
        title: readFileName,
        atime: fileStat.atime,
        mtime: fileStat.mtime,
        birthtime: fileStat.birthtime,
      };
      db = { ...db, [encodeFileName]: test };
      console.log('object');
      console.log(db[encodeFileName]);
      // console.log(db);
      // console.log(typeof fileStat.mtime, `${path}/${dirEntry.name}`);
      // db.query(`INSERT INTO ${dir} (title,atime) VALUES (?,?)`, [
      //   fileStat.isFile,
      //   fileStat.atime,
      // ]);

      // const compiled = await compile(body, {
      //   jsxImportSource: 'preact',
      //   remarkPlugins: [gfm],
      // });
      // const encodeFileName = encode(dirEntry.name.split('.')[0]);
      // const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      // console.log(hashFileName, string);
      // console.log(Deno.statSync(`${path}/${dirEntry.name}`));
      // console.log(dirEntry.name);
      // const isFile = await exists(`./routes/blog/${dir}/${encodeFileName}.jsx`);
      // if (isFile) {
      //   const existFile = await Deno.readTextFile(forWriteFileName);

      //   if (JSON.stringify(existFile) !== JSON.stringify(compiled.value)) {
      //     await Deno.writeTextFile(
      //       `./routes/blog/${dir}/${encodeFileName}.jsx`,
      //       compiled
      //     );
      //   }
      // }
    }
  });
  await Promise.all(promises);

  await Deno.writeTextFile(`./test.json`, JSON.stringify(db));

  console.timeEnd('mdx build time ');
};
