/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Post, addNewPosts } from "@/features/blogSlice";
import { getAllPosts } from "@/lib/posts";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts().catch((e) => console.log(e));

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
  // TODO: add all posts to store.
  // const storePosts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch()

  dispatch(addNewPosts(posts as Post))
  return (
    <section>
      {/* {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
        </div>
      ))} */}
      <h3>Blog</h3>
    </section>
  );
};

export default Blog;
