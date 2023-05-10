"use client";
import Link from "next/link";
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import cx from "classnames";

const getNavLinks = (
  pathname: string
): { name: string; href: string; isActive: boolean }[] => [
  { name: "Home", href: "/", isActive: pathname === "/" },
  {
    name: "Dashboard",
    href: "/dashboard",
    isActive: pathname.startsWith("/dashboard"),
  },
  {
    name: "Contact",
    href: "/contact",
    isActive: pathname.startsWith("/contact"),
  },
  {
    name: "Json Placeholders",
    href: "/jsonplaceholders",
    isActive: pathname.startsWith("/jsonplaceholders"),
  },
];

const DebugURL = () => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();

  return (
    <div className="space-y-4 text-sm">
      <div>
        <p className="text-gray-500">usePathname</p>
        <p>{pathname}</p>
      </div>
      <div>
        <p className="text-gray-500">useSelectedLayoutSegment</p>
        <p>{segment}</p>
      </div>
      <div>
        <p className="text-gray-500">useSelectedLayoutSegments</p>
        <p>[ {segments.join(", ")} ]</p>
      </div>
    </div>
  );
};

export const MainNav = () => {
  const pathname = usePathname();
  const navLinks = getNavLinks(pathname);

  return (
    <div className="flex justify-between items-end">
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
      <div className="">
        <DebugURL />
      </div>
    </div>
  );
};
