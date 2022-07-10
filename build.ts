import { compile } from 'mdx2';
import {
  decode as utf8Decode,
  encode as utf8Encode,
} from 'https://deno.land/std@0.82.0/encoding/utf8.ts';
import { crypto } from 'https://deno.land/std@0.147.0/crypto/mod.ts';
import {
  decode,
  encode,
} from 'https://deno.land/std@0.147.0/encoding/base64.ts';

import * as gfm from 'https://esm.sh/remark-gfm@3.0.1';

export const buildMdx = () => {
  console.log('object');
  const dirs = ['posts', 'notes'];
  //먼자 한글파일부터 되는지 보자
  dirs.map(async (dir) => {
    const path = `./blog/${dir}`;
    for await (const dirEntry of Deno.readDir(path)) {
      const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
      const compiled = await compile(body, {
        jsxImportSource: 'preact',
        remarkPlugins: [gfm],
      });
      const encodeFileName = encode(dirEntry.name.split('.')[0]);

      // console.log(hashFileName, string);
      // console.log(Deno.statSync(`${path}/${dirEntry.name}`));
      // console.log(dirEntry.name);
      await Deno.writeTextFile(
        `./routes/blog/${dir}/${encodeFileName}.jsx`,
        compiled
      );
    }
  });
  console.log('finish');
};
