import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// fetch all blog posts
export const getAllPosts = async () => {
  try {
    const query = groq`*[_type == "post"]`;
    const posts = await client.fetch<Promise<unknown>>(query);
    // print posts to console
    // console.log("got posts... ", posts);

    return posts;
  } catch (error) {
    console.log("an error occured... ", error);
    return error
  }
};

export const getAllSlugs = async () => {
  try {
    const query = groq`*[_type == "post"][].slug.current`;
    const slugs = await client.fetch<Promise<string[]>>(query);
    // console.log("all slugs", slugs)
    return slugs;
  } catch (error) {
    console.log("an error occured... ", error);
    return error;
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const query = groq`*[_type == "post" && slug.current == $slug][0]`;

    const post = await client.fetch<Promise<unknown>>(query, { slug });
    // console.log("got post by slug...", post)
    return post;
  } catch (error) {
    console.log("an error occured... ", error);
    return error;
  }
};
