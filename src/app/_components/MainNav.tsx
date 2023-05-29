'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from 'classnames';

const getNavLinks = (pathname: string): { name: string, href: string, isActive: boolean; }[] => ([
  { name: "Home", href: '/', isActive: pathname === '/' },
  { name: 'Dashboard', href: '/dashboard', isActive: pathname.startsWith('/dashboard') },
  { name: 'Contact', href: '/contact', isActive: pathname.startsWith('/contact') },
  { name: 'Json Placeholders', href: '/jsonplaceholders', isActive: pathname.startsWith('/jsonplaceholders') },
  { name: 'Json Placeholders - Route Group', href: '/jsonplaceholders-route-group', isActive: pathname.startsWith('/jsonplaceholders-route-group') },
]);

export const MainNav = () => {
  const pathname = usePathname();
  const navLinks = getNavLinks(pathname);

  return (
    <div className="flex gap-4">
      {navLinks.map(({ name, href, isActive }) => (
        <Link
          key={href}
          href={href}
          className={cx("", {
            "text-zinc-500 hover:white": !isActive,
            "text-white": isActive,
          })}
        >
          <span>{name}</span>
        </Link>
      ))}
    </div>
  );
};