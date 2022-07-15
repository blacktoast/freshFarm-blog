import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup, apply } from 'twind';
export * from 'twind';

export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',

  // deno-lint-ignore no-dupe-keys
  preflight: (preflight, { theme }) => ({
    html: {
      margin: 0,
      padding: 0,
    },

    svg: {
      display: 'inline',
    },
    a: { textDecoration: 'none', outline: 'none' },

    code: {
      backgroundColor: 'gray',
      color: 'orange',
    },
    ...preflight,
  }),
};
if (IS_BROWSER) setup(config);
