
### nogizaka

#### 一、API部分

> 集成域名: `http://112.74.32.29:8081`

##### 1、分页获取新闻

- 接口地址:`/blogs/getBlogsByPage`
- 调用方式:`GET`
- 参数说明:

  参数名 | 类型 | 必填 | 备注
  --------- | -------------| --------- | -------------
  pageNo | int | 否 | 默认为0（表示第一页）
  pageSize | int | 否 | 默认为15
  desc | boolean | 否 | 默认为true（表示到倒排序）

- 返回

	```
	{
	  "content": [
	        {
            "id": 1,
            "name": "markdown测试",
            "summary": "summary",
            "content": "####%20%E6%95%88%E6%9E%9C%E5%9B%BE%EF%BC%9A%0A%0A!%5BhorizontalScrollView%5D(http://o7zh7nhn0.bkt.clouddn.com/horizontalScrollMoreLayout.gif)",
            "category": "cate",
            "created_time": 1486717321037,
            "image_url": "http://o7zh7nhn0.bkt.clouddn.com/auu88f43a5el3lk3gcajxajor.jpg"
          },
          ...
	  ],
	  "last": true,
	  "totalElements": 43,
	  "totalPages": 3,
	  "first": false,
	  "numberOfElements": 0,
	  "size": 15,
	  "number": 3
}
	```

##### 2、获取新闻详情

- 接口地址:`/blogs/getBlogDetailById`
- 调用方式:`GET`
- 参数说明:

  参数名 | 类型 | 必填 | 备注
  --------- | -------------| --------- | -------------
  id | int | 是 | 新闻id（主键）

- 返回

	```
	{
	  "responseData": {
	    "id": 5,
	    "name": "markdown测试",
	    "summary": "summary",
	    "content": "中文测试",
	    "category": "cate",
	    "created_time": 1486720729698,
	    "image_url": "http://o7zh7nhn0.bkt.clouddn.com/auu88f43a5el3lk3gcajxajor.jpg"
	  },
	  "code": 200,
	  "message": "success"
}
	```


##### 3、获取新闻种类

- 接口地址:`/blogs/getCategories`
- 调用方式:`GET`
- 返回

	```
	{
	  "responseData": [
	    "cate",
	    "h测试测试ahah",
	    ""
	  ],
	  "code": 200,
	  "message": "success"
}
	```











