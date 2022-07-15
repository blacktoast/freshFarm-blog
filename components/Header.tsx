/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div class={tw`flex `}>
      <a href="/post">blog</a>
      <a href="/notes">note</a>
      <a href="/projects">projects</a>
      <a href="/guestBook">guestBook</a>
    </div>
  );
};
