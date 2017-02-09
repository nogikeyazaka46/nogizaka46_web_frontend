/**
 * Created by RadAsm on 17/2/4.
 */
'use strict'

import {NetRequest} from '../utils/NetUtils';

import * as apis from "./blogs/apis";

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
        context.commit("setBlogDetail", responseJson);
      })
      .catch((error)=> {
        console.log("获取blog详情出错!");
      });
  },
  saveBlog(context, blogContent){
    NetRequest.postSend(apis.saveBlog, JSON.stringify(blogContent))
      .then((response)=> {
        console.log('保存成功!')
      })
      .catch((error)=> {
        console.log("error");
      })
  }
};

export {actions};
