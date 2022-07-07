import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup, apply } from 'twind';
export * from 'twind';

export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',

  preflight: (preflight, { theme }) => ({
    ...preflight,
    html: {
      margin: 0,
      padding: 0,
    },

    svg: {
      display: 'inline',
    },

    pre: {
      code: {
        backgroundColor: 'white',
      },
    },

    code: {
      backgroundColor: 'gray',
      color: 'orange',
    },

    h1: {
      display: 'inline',
    },
  }),
};
if (IS_BROWSER) setup(config);
