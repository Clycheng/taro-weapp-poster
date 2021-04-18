# taro-weapp-poster

> [taro-weapp-poster](https://github.com/Clycheng/taro-weapp-poster) 是一款taro小程序海报生成器，采用taro内置createCanvasContext方法进行canvas绘制生成，支持绘制文字/图片


## 使用说明

- `npm install taro-weapp-poster`

``` javascript

 <PosterModal
    onRender={res => console.log(res, 'res')}
    width='320px'
    height='568px'
    list={[
    {
      type: 'text',
      text: '这是文字',
      fontSize: '56px',
      color: '#333',
      left: 10,
      top: 20,
    },
    {
      type: 'image',
      imgType: 0, // 图片类型，圆形1，矩形0
      urlType: 2, // 1:本地路径 或者网络路径:2
      url: 'http://s.devland.cn/fa3f6cc819a8a316f924fb61c9478bfe.jpeg',
      width: 50,
      height: 50,
      left: 100,
      top: 100,
    },
]}></PosterModal>

```


## 参数

|  参数名   | 是否必传  | 类型 | 默认值| 说明 |
|  :----:  | :----:  | :----: |  :----:  |  :----:  |
| width  | 是 | string | 548px  | 海报宽度 |
| height  | 是 | string | 750px | 海报高度 |
| opacity  | 否 | number | 1 | 海报透明度|
| background  | 否 | string | white | 海报背景色 |
| list | 否| array | [] |海报内容，详见list|
| onRender  | 否 | function | (res)=>console.log(res) | 回调 res返回海报本地路径|



## list
- 文字绘制


|  参数名   | 是否必传  | 类型 | 默认值| 说明 |
|  :----:  | :----:  | :----: |  :----:  |  :----:  |
| type  | 否 | string | text|   | 元素类型 |
| text  | 否 | string | 750px | 文字，type为text时生效 |
| color  | 否 | number | 1 | 文字颜色，type为text时生效|
| fontSize  | 否 | string | white | 文字大小， type为text时生效 |
| left | 否| array | [] |位置，距离海报左边的距离|
| top | 否| array | [] |位置，距离海报顶部的距离|


- 图像绘制（占支持矩形）


|  参数名   | 是否必传  | 类型 | 默认值| 说明 |
|  :----:  | :----:  | :----: |  :----:  |  :----:  |
| type  | 否 | string | | image  | 元素类型 |
| imgType  | 否 | string | 0 | 图片类型：0-矩形  1-圆形（暂不支持） |
| urlType  | 否 | number | 2 | 图片路径类型：1-本地路径，2-网络路径，3-base64（暂不支持）|
| url  | 否 | string |  | 图片路径|
| width | 否| number |  |图像宽度|
| height | 否| number |  |图像高度|
| left | 否| number |  |图像左边距|
| top | 否| number |  |图像右边距|


####  关于作者

微信: cxl1249587790 (备注来源)

email: cxltop@163.com



