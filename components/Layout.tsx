import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <nav className="flex mx-4 my-2 justify-around align-middle text-xl">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/list">
          <a>List</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
