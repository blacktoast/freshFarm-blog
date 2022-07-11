import { compile } from 'mdx2';

import { decode, encode } from 'base64';

import { exists } from 'https://deno.land/std@0.147.0/fs/mod.ts';

import * as gfm from 'https://esm.sh/remark-gfm@3.0.1';
import { DB } from 'https://deno.land/x/sqlite/mod.ts';

const baseDir = './blog/';

export const buildMdx = async () => {
  const db = new DB('blog.db');

  db.query(`
  CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    atime DATA
  )
`);

  console.time('mdx build time ');
  const dirs = ['posts', 'notes'];
  dirs.map((dir) => {
    db.query(`
    CREATE TABLE IF NOT EXISTS ${dir} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      atime DATA
    )
  `);
  });
  //먼자 한글파일부터 되는지 보자
  const promises = dirs.map(async (dir) => {
    const path = `./blog/${dir}`;
    for await (const dirEntry of Deno.readDir(path)) {
      const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
      const fileStat = await Deno.stat(`${path}/${dirEntry.name}`);
      // console.log(typeof fileStat.mtime, `${path}/${dirEntry.name}`);
      // db.query(`INSERT INTO ${dir} (title,atime) VALUES (?,?)`, [
      //   fileStat.isFile,
      //   fileStat.atime,
      // ]);
      for (const a of db.query(`SELECT title,atime FROM ${dir}`)) {
        console.log(a);
      }
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
  console.timeEnd('mdx build time ');
};

// // Open a database
// const db = new DB('blog.db');
// db.query(`
//   CREATE TABLE IF NOT EXISTS people (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT,
//     atime DATA
//   )
// `);

// const names = ['Peter Parker', 'Clark Kent', 'Bruce Wayne'];

// // Run a simple query
// for (const name of names) {
//   db.query('INSERT INTO people (name) VALUES (?)', [name]);
// }

// // Print out data in table
// for (const [name] of db.query('SELECT name FROM people')) {
//   console.log(name);
// }

// // Close connection
