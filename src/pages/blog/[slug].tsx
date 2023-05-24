import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import type { ParsedUrlQuery } from "querystring";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;

  const post = await getPostBySlug(slug)

  return {
    props: {
      post
    },
  };
};

const Slug = ({post}: { post: InferGetStaticPropsType<typeof getStaticProps>}) => {
  console.log(post)
  return (
    <section>
      <h3>Slug page</h3>
    </section>
  );
};

export default Slug;
