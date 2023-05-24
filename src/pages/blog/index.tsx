/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getAllPosts } from "@/lib/posts";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

const Blog = ({
  posts,
}: {
  posts: InferGetStaticPropsType<typeof getStaticProps>;
  
}) => {
    console.log(posts)
  return (
    <section>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
        </div>
      ))}
      <h3>Blog</h3>
    </section>
  );
};

export default Blog;
