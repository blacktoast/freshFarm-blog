export const pageGen = (component: any) => {
  return `
  /** @jsx h */
  import { h } from 'preact';
  import { tw } from '@twind';
  import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
  import { Head } from '$fresh/runtime.ts';
  import * as jsxP from 'https://esm.sh/preact@10.9.0/jsx-runtime';

  ${component}

  export default function Home(props: PageProps) {
    const tmp = props.url.href.split('/');
    console.log(tmp[tmp.length - 1]);

    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/vs2015.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
          <link rel="stylesheet" href="/post.css"></link>
          <script>hljs.initHighlightingOnLoad();</script>
        </Head>
        <MDXContent/>
      </div>
    );
  }
  
  `;
};
