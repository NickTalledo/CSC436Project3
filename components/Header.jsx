"use client";

import useUser from "csc-start/lib/useUser";
import Link from "next/link";
import ActionsFooter from "./ActionsFooter";

const Header = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="barge bg-black flex justify-between items-center">
      <p className="text-white">
        {user ? `Hello, ${user.email}` : <Link href="/">Home</Link>}
      </p>
      <p className="h2 text-white">
        <Link
          className="hover:text-brutal-yellow duration-300 transition-all"
          href="/"
        >
          TO DO
        </Link>
      </p>
      <div className="flex justify-between">
        <p className="text-white">
          <ActionsFooter />
        </p>
      </div>
    </header>
  );
};

export default Header;
