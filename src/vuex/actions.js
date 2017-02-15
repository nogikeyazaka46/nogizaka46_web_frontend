/**
 * Created by RadAsm on 17/2/4.
 */
'use strict'

import {NetRequest} from '../utils/NetUtils';

import * as apis from "./blogs/apis";
import * as category_apis from './category/apis';

// todo handle error
const actions = {

  getBlogs(context){
    NetRequest.requestUrl(apis.getAllBlogs, "GET")
      .then((responseJson)=> {
        context.commit("setBlogs", responseJson);
      })
      .catch((error)=> {
        // todo handle error
        context.state.errormsg = error.toString();
      })
  },
  getBlogById(context, id){
    NetRequest.requestUrl(apis.getBlogDetailById + "?id=" + id, "GET")
      .then((responseJson)=> {
        context.commit("setBlogDetail", responseJson.responseData);
      })
      .catch((error)=> {
        console.log("获取blog详情出错!");
      });
  },
  saveBlog(context, blogContent){
    NetRequest.postSend(apis.saveBlog, JSON.stringify(blogContent))
      .then((responseJson)=> {
        context.commit("setAddNewBlogResult", true);
        console.log('保存成功!')
      })
      .catch((error)=> {
        context.commit("setAddNewBlogResult", false);
        console.log("error");
      })
  },
  getBlogsByPage(context, pageNo){
    NetRequest.requestUrl(apis.getBlogsByPage + "?pageNo=" + pageNo + "&pageSize=8", "GET")
      .then((responseJson)=> {
        context.commit("setBlogs", responseJson.content);
        context.commit("setShouldShowNextPage", responseJson.last);
        context.commit("setShouldShowPrePage", responseJson.first);
        context.commit("setCurrentPageNo", responseJson.number);
      })
      .catch((error)=> {
        console.log("error:");
      });
  },
  getCategories(context){
    NetRequest.requestUrl(apis.getCategories, "GET")
      .then((responseJson)=> {
        console.log(responseJson.responseData);
        context.commit("setCategories", responseJson.responseData);
      })
      .catch((error)=> {
        console.log("error:");
      });
  },
  addNewCategory(context, category){
    NetRequest.requestUrl(category_apis.getAllCategories + "?category=" + category, "POST")
      .then((responseJson)=> {
        context.commit("setAddNewCategoryResult", responseJson.code);
      })
      .catch((error)=> {
        console.log("error");
      });
  },

};

export {actions};
