/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';

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
  console.log();
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1>tesaat</h1>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. ay update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
