"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, routeName }: any) => {
  const pathName = usePathname();

  return (
    <li
      className={`${
        pathName === `/${href}` ? "text-blue-500" : "hover:text-blue-300"
      }`}
    >
      <Link href={`/${href}`}>{routeName}</Link>
    </li>
  );
};

export default NavLink;
