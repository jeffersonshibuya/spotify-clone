'use client';
import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';

import Box from './Box';
import Library from './Library';
import SidebarItem from './SidebarItem';

const Sidebar = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathName !== '/search',
        href: '/'
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathName === '/search',
        href: '/search'
      }
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden w-[300px] flex-col gap-2 bg-black p-2 md:flex">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
