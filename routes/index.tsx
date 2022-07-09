/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
import Input from '@/islands/Input.tsx';
import { useState } from 'preact/hooks';
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
    console.log(e);
  };
  const [count, setCount] = useState(0);

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Input></Input>
    </div>
  );
}
