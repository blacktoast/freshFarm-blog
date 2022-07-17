/** @jsx h */
import { h, Fragment, ComponentChildren } from 'preact';
import { tw } from '@twind';
import { Head } from '$fresh/runtime.ts';

interface Page2Props {
  children: ComponentChildren;
}

export const Page = ({ children }: Page2Props) => {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/post.css"></link>
      </Head>
      {children}
    </Fragment>
  );
};
