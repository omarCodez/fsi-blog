import { createSlice } from "@reduxjs/toolkit";

const posts: any[] = [];

const postSlice = createSlice({
  name: "post",
  initialState: posts,
  reducers: {
    getAllPosts: (state, action) => {
      //
    },
  },
});

export default postSlice.reducer;
