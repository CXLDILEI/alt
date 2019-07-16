<!-- 首页 -->
1.首页Index 顶部图片接口
请求方式:GET
url:'url'
返回数据:
{
    <!-- title可以没有 -->
    title:''
    src:'https://picsum.photos/1024/480/?image=58' 
}

2.首页产品示例图接口
请求方式:GET
url:'url'
<!-- 根据id查对应详情信息 -->
返回数据:
{
    data:[
        {
            id:1,
            src:'https://picsum.photos/1024/480/?image=58'
        },
        {
            id:2,
            src:'https://picsum.photos/1024/480/?image=58'
        },
        {
            id:3,
            src:'https://picsum.photos/1024/480/?image=58'
        },
        {
            id:4,
            src:'https://picsum.photos/1024/480/?image=58'
        },
    ]
}

3.首页公示信息
请求方式:GET
url:'url'
返回数据:
{
    title:'公示标题',
    content:'公示内容'
}

<!-- 详情页 -->
4.详情页轮播
请求方式:POST
url:'url'
请求数据：data{id:1}
返回数据:
{
    data:[
        {
            <!-- title可以没有 -->
            title:'标题',
            src:'https://picsum.photos/1024/480/?image=58'
        },
        {
            <!-- title可以没有 -->
            title:'标题',
            src:'https://picsum.photos/1024/480/?image=58'
        },
        {
            <!-- title可以没有 -->
            title:'标题',
            src:'https://picsum.photos/1024/480/?image=58'
        },
        {
            <!-- title可以没有 -->
            title:'标题',
            src:'https://picsum.photos/1024/480/?image=58'
        },
    ]
}

5.详情页表格信息
请求方式:POST
url:'url'
请求数据：data{id:1}
返回数据:
<!-- title--表格键名  content---表格键值 -->
{
    data:[
        { title: 'Dickerson',content: '40'},
        { title: 'Larsen',content: '21'},
        {  title: 'Geneva',content: '89'},
        { title: 'Jami',content: '38'}
    ]
}

6.详情页图片列表
请求方式:POST
url:'url'
请求数据：data{id:1}
返回数据:
{
    data:[
        {
            src:'https://picsum.photos/1024/480/?image=58';
        },
        {
            src:'https://picsum.photos/1024/480/?image=58';
        },
        {
            src:'https://picsum.photos/1024/480/?image=58';
        },
        {
            src:'https://picsum.photos/1024/480/?image=58';
        },
    ]
}

7.详情购买跳转链接
请求方式:POST
url:'url'
请求数据：data{id:1}
返回数据:
{
   url:''
}