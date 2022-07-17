/** @jsx h */
import { h, Fragment } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
import Input from '@/islands/Input.tsx';
import { useState } from 'preact/hooks';
import { Header } from '@/components/Header.tsx';
import { Page } from '@/components/index.ts';

import CopyCode from '@/islands/CopyCode.tsx';
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

export default function Home() {
  const [st, setState] = useState('');
  const change = (e: any) => {
    alert(e);
  };
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Page>
        <Header></Header>
        <main>
          <div class={tw`lg:max-w-screen-md px-6 pt-8 mx-auto`}>
            testtesttest
          </div>
        </main>
      </Page>
    </Fragment>
  );
}
