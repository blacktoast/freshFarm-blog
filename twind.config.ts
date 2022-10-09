import { Options } from "$fresh/plugins/twind.ts";
import { css } from "twind/css#css_directive";

export default {
  selfURL: import.meta.url,
  preflight: (preflight) =>
    css`
    ${preflight}
    h1, h2, h3, h4, h5, h6 {
      padding: 3px 2px;
      line-height: 1.3;
      white-space: pre-wrap;
    }

    h1 {
      font-size: 1.875rem;
      font-weight: 700;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 500;
    }

    h4 {
      font-size: 1.025rem;
      font-weight: 400;
    }

    blockquote {
      padding: 0 1em;
      color: #57606a;
      border-left: 0.25em solid #57606a;
    }
  `,
} as Options;
