/**
 * Created by RadAsm on 17/1/22.
 */
"use strict";

const getters = {

  getBlogs(state){
    console.log("getBlogs");
    return state.blogs;
  },
  getBlogContent(state){
    return state.blogContent;
  }
};

export {getters};
