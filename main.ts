import { buildMdx } from './build.ts';
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from '$fresh/server.ts';
import manifest from './fresh.gen.ts';
console.log('12');
import { config, setup } from '@twind';
import { virtualSheet } from 'twind/sheets';
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
console.log('123');
buildMdx();
await start(manifest, { render });
console.log('1235');
