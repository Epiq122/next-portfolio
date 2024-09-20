'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
  const path = usePathname();

  return (
    <Link
      className={`rounded p-1 ${path === link.url ? 'bg-black text-white' : 'text-black'}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};
export default NavLink;
