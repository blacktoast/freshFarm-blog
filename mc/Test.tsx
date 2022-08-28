/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export const Test = ({ children }) => {

  
  return <div class={tw`p-4 mx-auto max-w-screen-md`}> {children}</div>;
};
