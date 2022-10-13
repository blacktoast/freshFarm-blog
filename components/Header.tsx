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
      class='sticky top-0 bg-green-200'
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div class='flex justify-between lg:max-w-screen-lg md:max-w-screen-md px-6 py-4 mx-auto'>
        <h2>retto</h2>
        <div class='hidden sm:flex gap-4 text-xl items-center '>
          {Object.entries(links).map((link) => {
            const [key, bool] = link;
            return (
              <a href={`/${key}`} className={bool && 'active'}>
                {key}
              </a>
            );
          })}
        </div>
        <div class='flex sm:hidden'>hi</div>
      </div>
    </div>
  );
};
