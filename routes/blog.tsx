/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Page } from '@/components/Page.tsx';
import { Input } from '@/components/Input.tsx';
import * as jsxP from 'https://esm.sh/preact@10.9.0/jsx-runtime';
// import Test from "./blog/posts/Yg==.jsx";
// export const handler: Handlers = {
//   async GET(_, ctx) {
//     const { username } = ctx.params;
//     const resp = await fetch(`https://api.github.com/users/${username}`);
//     const test = await Deno.readTextFile('./test.txt');

//     if (resp.status === 404) {
//       return ctx.render(null);
//     }
//     // return ctx.render(body);
//   },
// };

// export const handler = async (_req: Request, ctx: HandlerContext): Response => {
//   // const body = 'aa';
//   const body = (await import('../mdx/posts/a.jsx')).default;
//   // console.log(body);
//   // const body = 'aa';
//   // for await (const dirEntry of Deno.readDir('./blog/posts')) {
//   //   console.log(dirEntry);
//   // }
//   // const mdx = await Deno.readTextFile('./blog/posts/a.mdx');
//   // const mdx2 = await compile(mdx, {
//   //   outputFormat: 'function-body',
//   //   jsxImportSource: 'preact',
//   // });
//   // const body = await run(mdx2, jsxP);
//   console.log(body);
//   return ctx.render({ body });
// };

// const st = {
//   backgroundColor: 'red',
// };

export default function Home(props: PageProps) {
  // const { body } = props.data;
  // const Test = body.default;
  // console.log(Test);

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
      <Counter start={3}></Counter>
      <img src="/image/Test.png" alt="" />
      <Page></Page>
    </div>
  );
}
