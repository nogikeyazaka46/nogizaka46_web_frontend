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
  },
  getShouldShowPre(state){
    return state.showPrePage;
  },
  getShouldShowNext(state){
    return state.showNextPage;
  },
  currentPageNo(state){
    return state.currentPageNo;
  },
  getCategories(state){
    return state.categories;
  }
};

export {getters};
