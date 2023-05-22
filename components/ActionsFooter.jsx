"use client";

import useUser from "csc-start/lib/useUser";
import Link from "next/link";

const ActionsFooter = () => {
  const { user, loading } = useUser();
  if (loading) {
    return <p className="barge">Loading</p>;
  }
  if (!user) {
    return (
      <div>
        <Link href="/login">Login</Link>
        <br></br>
        <Link href="/register">Register</Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/profile">Profile</Link>
      <br></br>
      <Link href="/logout">Logout</Link>
    </div>
  );
};

export default ActionsFooter;
