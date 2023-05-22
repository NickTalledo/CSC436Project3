import { getUserBySlug } from "csc-start/utils/data";
import { notFound } from "next/navigation";

export const revalidate = 30;

const Page = async ({ params: { slug } }) => {
  const { data, error } = await getUserBySlug(slug);

  if (!!error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    notFound();
  }

  const { user_id } = data;

  return <></>;
};

export default Page;
