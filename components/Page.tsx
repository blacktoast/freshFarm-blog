/** @jsx h */
import { h, Fragment, ComponentChildren } from 'preact';
import { tw } from '@twind';
import { Head } from '$fresh/runtime.ts';
import { Header } from './Header.tsx';

interface Page2Props {
  children: ComponentChildren;
}

export const Page = ({ children }: Page2Props) => {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/post.css"></link>
      </Head>
      <div class={tw`lg:max-w-screen-md md:max-w-screen-sm px-6 pt-8 mx-auto`}>
        {children}
      </div>{' '}
    </Fragment>
  );
};
