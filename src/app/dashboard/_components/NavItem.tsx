'use client';
import Link from "next/link";
import cx from 'classnames';
import { usePathname } from "next/navigation";

export const NavItem = ({ name, href }: { name: string, href?: string; }) => {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  return (
    <li className={cx("p-4 rounded-lg  cursor-pointer", {
      "text-zinc-500 hover:text-white hover:bg-zinc-800": !isActive,
      "text-white bg-zinc-800": isActive,
    })}>
      {href && <Link href={href} className="font-semibold">{name}</Link>}
      {!href && <span>{name}</span>}
    </li>
  );
};