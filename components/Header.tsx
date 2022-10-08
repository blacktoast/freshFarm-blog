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
      class="sticky top-0 bg-green-100"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div class="flex justify-between lg:max-w-screen-md md:max-w-screen-sm px-6 py-4 mx-auto">
        <h2>retto</h2>
        <div class="hidden sm:flex gap-4 text-xl items-center ">
          {Object.entries(links).map((link) => {
            const [key, bool] = link;
            return <a> {key}</a>;
          })}

          <a href="/post">blog</a>
          <a href="/notes">note</a>
          <a href="/projects">projects</a>
          <a href="/guestBook">guestBook</a>
        </div>
        <div class="flex sm:hidden"> hi </div>
      </div>
    </div>
  );
};
