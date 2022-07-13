export const pageGen = (component: any) => {
  console.log(component);

  return `
  /** @jsx h */
  import { h } from 'preact';
  import { tw } from '@twind';
  import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
  import { Head } from '$fresh/runtime.ts';
  import { Page } from '@/components/Page.tsx';
  import { Input } from '@/components/Input.tsx';
  import * as jsxP from 'https://esm.sh/preact@10.9.0/jsx-runtime';

  ${component.value}

  export default function Home() {
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
        <Page></Page>
      </div>
    );
  }
  
  `;
};
