import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup, apply } from 'twind';
export * from 'twind';

export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',
  preflight: false,
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 15px 5px rgba(0,0,0,0.1)',
      },
      backgroundColor: {
        white: 'rgba(255,255,255,0.25)',
        green: 'rgba(134, 239, 172, 0.75)',
      },
    },
  },
};
if (IS_BROWSER) setup(config);
