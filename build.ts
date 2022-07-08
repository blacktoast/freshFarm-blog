import { compile } from 'mdx2';

export const buildMdx = () => {
  // import {
  //   decode as utf8Decode,
  //   encode as utf8Encode,
  // } from 'https://deno.land/std@0.82.0/encoding/utf8.ts';
  // import * as mod from 'https://deno.land/std@0.140.0/hash/md5.ts';

  const dirs = ['posts', 'notes'];

  dirs.map(async (dir) => {
    const path = `./blog/${dir}`;
    for await (const dirEntry of Deno.readDir(path)) {
      const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
      console.log('aa    ', dirEntry.name.split('.')[0]);
      const compiled = await compile(body, { jsxImportSource: 'preact' });
      const builedFileName = dirEntry.name.split('.')[0].split(' ').join('_');
      await Deno.writeTextFile(
        `./routes/${dir}/${builedFileName}.jsx`,
        compiled
      );
    }
  });
  console.log('object');
};

buildMdx();
