import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup, apply } from 'twind';
export * from 'twind';

export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',

  // deno-lint-ignore no-dupe-keys
};
if (IS_BROWSER) setup(config);
