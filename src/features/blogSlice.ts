/* eslint-disable @typescript-eslint/no-unused-vars */
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Post = {
  author: string;
};
type Props = {
  post: Post[];
};
const blog: Props = {
  post: [],
};

const blogSlice = createSlice({
  name: "post",
  initialState: blog,
  reducers: {
    addNewPosts: (state, action: PayloadAction<Post>) => {
      // add to posts [] array
      state.post.push(action.payload);
    },
  },
});

export const { addNewPosts } = blogSlice.actions;

export default blogSlice.reducer;
