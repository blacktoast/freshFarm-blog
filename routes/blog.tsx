/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Page } from '@/components/Page.tsx';

import AA from '@/mdx/posts/a.jsx';
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

export const handler = async (_req: Request, ctx: HandlerContext): Response => {
  const body = (await import('@/mdx/posts/a.jsx')).default;
  // const body = await Deno.readTextFile(
  //   './posts/fresh 로 개발 블로그 구현기2.jsx'
  // );
  return ctx.render({ body });
};

// const st = {
//   backgroundColor: 'red',
// };

export default function Home(props: PageProps) {
  const { body } = props.data;
  const Test = body;
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
      <Page></Page>
      <AA></AA>
    </div>
  );
}
