"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Separator } from "./ui/separator";
import { useParams, usePathname } from "next/navigation";
import clsx from "clsx";
import { useMemo } from "react";

const links = [
  {
    path: "/work",
    title: "Work",
  },
  {
    path: "/blog",
    title: "Blog",
  },
];

export default function Header() {
  const pathname = usePathname();
  const { slug } = useParams();
  const currPath = useMemo(() => {
    if (slug) {
      return pathname.replace(`/${slug}`, "");
    }
    return pathname;
  }, [pathname, slug]);

  return (
    <header className=" flex items-center justify-between pb-20 pt-10">
      <nav className=" flex items-center justify-between text-sm text-primary/60">
        <ul className=" flex">
          <li
            className={clsx(" mr-6", {
              "text-primary": currPath === "/",
            })}
          >
            <Link href="/">@Pirtor</Link>
          </li>

          {links.map(({ path, title }, index) => {
            return (
              <li
                key={path}
                className={clsx(" flex", {
                  "text-primary": currPath === path,
                })}
              >
                <Link className=" px-3" href={path}>
                  {title}
                </Link>
                {index !== links.length - 1 ? (
                  <Separator orientation="vertical" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>

      <ThemeToggle />
    </header>
  );
}
