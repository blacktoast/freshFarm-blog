import { Options } from '$fresh/plugins/twind.ts';
import { css } from 'twind/css#css_directive';

export default {
  selfURL: import.meta.url,
  preflight: (preflight) =>
    css`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        list-style: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        padding: 3px 2px;
        line-height: 1.3;
        white-space: pre-wrap;
      }

      h1 {
        font-size: 1.875rem;
        margin: 2.5rem 0 1rem 0;

        font-weight: 700;
      }
      h2 {
        font-size: 1.5rem;
        margin: 2.25rem 0 0.75rem 0;
        font-weight: 600;
      }

      h3 {
        font-size: 1.25rem;
        margin: 2rem 0 0.5rem 0;

        font-weight: 500;
      }

      h4 {
        font-size: 1.025rem;
        margin: 1.25rem 0 0.5rem 0;

        font-weight: 400;
      }

      blockquote {
        padding: 0 1em;
        color: #57606a;
        border-left: 0.25em solid #57606a;
        margin: 0.5rem 0;
      }

      pre {
        margin: 0.5rem 0;
      }

      code {
        border-radius: 0.25rem;
      }
    `,
} as Options;
