/**
 * Created by RadAsm on 17/1/22.
 */
"use strict";
const mutations = {
  setBlogs(state, blogs){
    console.log("load blogs~", blogs);
    state.blogs = blogs;
  },
  setBlogDetail(state, blogContent){
    console.log("blogContent:" + blogContent);
    state.blogContent = blogContent;
  },
  setShouldShowNextPage(state, last){
    state.showNextPage = !last;
    console.log("当前是否是最后一页:" + last);
  },
  setShouldShowPrePage(state, first){
    state.showPrePage = !first;
    console.log("当前是否是第一页:" + first);
  },
  setCurrentPageNo(state, pageNo){
    state.currentPageNo = pageNo;
    console.log("当前页码:" + pageNo);
  },
  setCategories(state, categories){
    state.categories = categories;
    console.log("categories:" + categories);
  }
};
export {mutations};
