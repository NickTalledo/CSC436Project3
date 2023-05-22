import { getLatestUsers } from "csc-start/utils/data";
import Link from "next/link";
export const revalidate = 20;

export default async function Home() {
  const { data, error } = await getLatestUsers();

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data.length === 0) {
    return <p>No users have signed up yet</p>;
  }

  return (
    <main className="barge">
      <p className="h1 text-center">Users Lists!</p>
      {data.map(({ name, slug }) => {
        return (
          <Link key={slug} href="users" className="block my-5 button small">
            {name}
          </Link>
        );
      })}
    </main>
  );
}
