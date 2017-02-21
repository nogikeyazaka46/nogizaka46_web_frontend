/**
 * Created by RadAsm on 16/11/4.
 */
'use strict'

const NetRequest = {

  /**
   * 访问Url
   *
   * @param url 访问的地址
   * @param requestMethod 访问的方式
   */
  requestUrl(url, requestMethod) {
    console.log("----------请求开始----------");
    console.log("---url:" + url + "-------");
    return new Promise((resolve, reject)=> {
      let req = new XMLHttpRequest();
      req.open(requestMethod, url, true);
      req.onload = ()=> {
        if (req.status === 200) {
          let responseJson = JSON.parse(req.responseText);
          console.log("-----成功返回:" + responseJson + "------");
          resolve(responseJson);
        } else {
          console.log("-----失败返回:" + req.statusText + "------");
          reject(new Error(req.statusText));
        }
      };
      req.onerror = ()=> {
        reject(new Error(req.statusText));
      };
      req.send();
    })
  },

  postSend(url, formData){
    return new Promise((resolve, reject)=> {
      let req = new XMLHttpRequest();
      req.open('POST', url, true);
      req.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
      req.send(formData);
      req.onload = ()=> {
        if (req.status === 200) {
          resolve();
        } else {
          reject(new Error(req.statusText));
        }
      };
      req.onerror = ()=> {
        console.log("error:" + req.statusText);
        reject(new Error(req.statusText));
      };
    });
  },

  sendFormData(url, formData){
    return new Promise((resolve, reject)=> {
      let req = new XMLHttpRequest();
      req.open('POST', url, true);
      req.send(formData);
      req.onload = (re)=> {
        if (req.status === 200) {
          let responseJson = JSON.parse(req.responseText);
          console.log("-----成功返回:" + responseJson + "------");
          resolve(responseJson);
        } else {
          reject(new Error(req.statusText));
        }
      };
      req.onerror = ()=> {
        console.log("error:" + req.statusText);
        reject(new Error(req.statusText));
      };
    });
  }

};

export {NetRequest};


