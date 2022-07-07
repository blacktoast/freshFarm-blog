#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from '$fresh/dev.ts';
import { compile } from 'mdx2';

const dirs = ['posts', 'notes'];

dirs.map(async (dir) => {
  const path = `./blog/${dir}`;
  for await (const dirEntry of Deno.readDir(path)) {
    const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
    console.log('aa    ', dirEntry.name.split('.')[0]);
    const compiled = await compile(body, { jsxImportSource: 'preact' });
    await Deno.writeTextFile(
      `./mdx/${dir}/${dirEntry.name.split('.')[0]}.jsx`,
      compiled
    );
  }
});
// const body = await Deno.readTextFile('./blog/fresh 로 개발 블로그 구현기.mdx');
// const compiled = await compile(body, { jsxImportSource: 'preact' });
// console.log(compiled);
// await Deno.writeTextFile('./posts/fresh 로 개발 블로그 구현기2.jsx', compiled);
await dev(import.meta.url, './main.ts');
