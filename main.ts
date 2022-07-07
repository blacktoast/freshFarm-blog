/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { compile } from 'mdx2';

import { InnerRenderFunction, RenderContext, start } from '$fresh/server.ts';
import manifest from './fresh.gen.ts';

import { config, setup } from '@twind';
import { virtualSheet } from 'twind/sheets';

const dirs = ['posts', 'notes'];

dirs.map(async (dir) => {
  const path = `./blog/${dir}`;
  for await (const dirEntry of Deno.readDir(path)) {
    const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
    console.log('aa    ', dirEntry.name.split('.')[0]);
    const compiled = await compile(body, { jsxImportSource: 'preact' });
    console.log(compiled);
    // await Deno.writeTextFile(
    //   `./mdx/${dir}/${dirEntry.name.split('.')[0]}.jsx`,
    //   compiled
    // );
  }
});

const sheet = virtualSheet();
sheet.reset();
setup({ ...config, sheet });

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get('twind') as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  ctx.state.set('twind', newSnapshot);
}

await start(manifest, { render });
