/**
 * Created by RadAsm on 17/1/22.
 */
"use strict";
const mutations = {
  setBlogs(state, blogs){
    state.blogs = blogs;
  },
  setBlogDetail(state, blogContent){
    console.log("blogContent:" + blogContent);
    state.blogContent = blogContent;
  }
};
export {mutations};
