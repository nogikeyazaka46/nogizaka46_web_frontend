/**
 * Created by RadAsm on 16/11/4.
 */
'use strict'

var _context;

var ANDROID_HISTORY_URL = 'http://gank.io/api/data/Android/10/';

var FULI_HISTORY_DATA = 'http://gank.io/api/data/福利/10/';

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

  }


  //requestAndroidData(pageNo) {
  //  return _context.requestUrl(ANDROID_HISTORY_URL + pageNo, 'GET');
  //}
  //
  //requestFULIData(pageNo) {
  //  return _context.requestUrl(FULI_HISTORY_DATA + pageNo, 'GET');
  //}
  //
  //requestALL(pageNo, callBack) {
  //  Promise
  //    .all([_context.requestAndroidData(pageNo), _context.requestFULIData(pageNo)])
  //    .then((response)=> {
  //      callBack('OK', response);
  //    })
  //    .catch((error)=> {
  //      callBack('FAIL', error);
  //    })
  //}
  //
  //requestAndroid(pageNo, callBack) {
  //  _context.requestAndroidData(pageNo)
  //    .then((response)=> {
  //      callBack('OK', response)
  //    })
  //    .catch((error)=> {
  //      callBack('FAIL', error)
  //    })
  //}
  //
  //requestFuli(pageNo, callBack) {
  //  _context.requestFULIData(pageNo)
  //    .then((response)=> {
  //      callBack('OK', response)
  //    })
  //    .catch((error)=> {
  //      callBack('FAIL', error)
  //    })
  //}
};

export {NetRequest};


