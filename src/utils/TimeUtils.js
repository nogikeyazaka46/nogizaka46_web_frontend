/**
 * Created by RadAsm on 17/2/5.
 */
"use strict";
const TimeUtils = {

  formatTimeYMDHM(time){
    let blog_created_time = new Date(time);
    let blog_created_year = blog_created_time.getYear() + 1900;
    let blog_created_month = blog_created_time.getMonth() + 1;
    let blog_created_day = blog_created_time.getDate();
    let blog_created_hour = blog_created_time.getHours();
    let blog_created_minute = blog_created_time.getMinutes();
    return blog_created_year + "-" + blog_created_month + "-" + blog_created_day + " " + blog_created_hour + ":" + blog_created_minute;
  },

};

export {TimeUtils};
