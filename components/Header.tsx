/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface HeaderProps {
  activeLink?: string;
}

interface linkType {
  [key: string]: Boolean;
}

export const Header = ({ activeLink = '' }: HeaderProps) => {
  const links: linkType = {
    post: false,
    notes: false,
    projects: false,
    guestBook: false,
  };
  if (typeof links[activeLink as string] !== 'undefined') {
    links[activeLink] = true;
  }

  return (
    <div
      class={tw` flex px-8 sticky top-0
      justify-between rounded-lg h-12 items-center  
      bg-green backdrop-blur`}
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <h2>retto</h2>
      <div
        class={tw`hidden sm:flex 
       gap-4 text-xl items-center `}
      >
        {Object.entries(links).map((link) => {
          const [key, bool] = link;
          console.log(key, bool);
          return <a> {key}</a>;
        })}
        <a href="/post">blog</a>
        <a href="/notes">note</a>
        <a href="/projects">projects</a>
        <a href="/guestBook">guestBook</a>
      </div>
      <div class={tw`flex sm:hidden`}> hi </div>
    </div>
  );
};
