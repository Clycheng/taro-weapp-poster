# taro-weapp-poster

> [taro-weapp-poster](https://github.com/Clycheng/taro-weapp-poster) 是一款 taro 小程序海报生成器，采用 taro 内置 createCanvasContext 方法进行 canvas 绘制生成，支持绘制文字/图片

## 使用说明

- `npm install taro-weapp-poster`

- 样图

![](http://s.devland.cn/6b85c32045e6db30708aecb113744724.jpeg)

```javascript
import React, { useEffect, useState } from "react";

import { Image } from "@tarojs/components";
import { previewImage } from "@tarojs/taro";

import PosterModal from "../../components/Poster";
import { shareBase } from "../../const/index";

const Index = (props) => {
  const [url, setUrl] = useState("");

  return (
    <>
      <Image
        onClick={() =>
          previewImage({
            current: url,
            urls: [url],
          })
        }
        style={{ width: "100vw" }}
        mode="widthFix"
        src={url}
      ></Image>
      <PosterModal
        onRender={(res) => {
          setUrl(res?.tempFilePath ?? "");
        }}
        width="320px"
        height="568px"
        list={[
          {
            type: "text",
            text: "毛鼠",
            fontSize: "16",
            color: "#333",
            X: 90,
            Y: 45,
          },
          {
            type: "text",
            text: "欢迎使用taro-weapp-poster",
            fontSize: "15",
            color: "#333",
            X: 90,
            Y: 70,
          },
          {
            type: "text",
            text: "欢迎使用taro-weapp-poster",
            fontSize: "18",
            color: "#000000",
            X: 40,
            Y: 130,
          },
          {
            type: "text",
            text: "欢迎使用taro-weapp-poster",
            fontSize: "19",
            color: "#d63737",
            X: 40,
            Y: 170,
          },
          {
            type: "text",
            text: "欢迎使用taro-weapp-poster",
            fontSize: "19",
            color: "#6ce919",
            X: 40,
            Y: 200,
          },
          {
            type: "text",
            text: "欢迎使用taro-weapp-poster",
            fontSize: "18",
            color: "#000000",
            X: 40,
            Y: 130,
          },
          {
            type: "text",
            text: "欢迎使用taro-weapp-poster",
            fontSize: "19",
            color: "#d63737",
            X: 40,
            Y: 170,
          },
          {
            type: "text",
            text: "欢迎使用taro-weapp-poster",
            fontSize: "19",
            color: "#6ce919",
            X: 40,
            Y: 200,
          },

          {
            type: "shape",
            shapeType: 1, // 实心圆
            roundY: 100,
            roundX: 100,
            roundR: 100,

            color: "rgba(200,200,200,0.5)",
          },
          {
            type: "shape",
            shapeType: 0, // 矩形
            width: 280,
            height: 300,

            X: 20,
            Y: 100,
            color: "rgba(200,200,200,0.5)",
          },
          {
            type: "shape",
            shapeType: 2, // 圆角矩形
            width: 280,
            height: 300,
            roundR: 50,
            X: 0,
            Y: 200,
            color: "rgba(200,200,200,1)",
          },
          {
            type: "image",
            imgType: 1, // 图片类型，圆形1，矩形0
            urlType: 0, // 2:本地路径 或者网络路径:0 base64 1
            url:
              "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci85NjgyOTMyZDAyMzFkZmRmOWNlNWE4YmRkMDczNmYxMz9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.h3KyzPUeRTxRDRH_Hug7O3SUkfxPL5t_V9iUOqL0_c4",
            roundY: 50,
            roundX: 50,
            roundR: 25,
          },
          {
            type: "image",
            imgType: 0, // 图片类型，圆形1，矩形0
            urlType: 1, // 2:本地路径 或者网络路径:0 base64 1
            url: shareBase,
            width: 100,
            height: 100,
            X: 180,
            Y: 400,
          },
        ]}
      ></PosterModal>
    </>
  );
};
export default Index;

```

## 参数

|   参数名   | 是否必传 |   类型   |         默认值          |           说明            |
| :--------: | :------: | :------: | :---------------------: | :-----------------------: |
|   width    |    是    |  string  |          548px          |         海报宽度          |
|   height   |    是    |  string  |          750px          |         海报高度          |
|  opacity   |    否    |  number  |            1            |        海报透明度         |
| background |    否    |  string  |          white          |        海报背景色         |
|    list    |    否    |  array   |           []            |    海报内容，详见 list    |
|  onRender  |    否    | function | (res)=>console.log(res) | 回调 res 返回海报本地路径 |

## list

- 文字绘制

|  参数名  | 是否必传 |  类型  | 默认值 |              说明              |
| :------: | :------: | :----: | :----: | :----------------------------: |
|   type   |    否    | string |  text  |            元素类型            |
|   text   |    否    | string |  文字  |   文字，type 为 text 时生效    |
|  color   |    否    | string |   1    | 文字颜色，type 为 text 时生效  |
| fontSize |    否    | number |   12   | 文字大小， type 为 text 时生效 |
|    X     |    否    | array  |   []   |             坐标 X             |
|    Y     |    否    | array  |   []   |             坐标 Y             |

- 图像绘制（矩形图像）

| 参数名  | 是否必传 |  类型  | 默认值 |                     说明                      |
| :-----: | :------: | :----: | :----: | :-------------------------------------------: |
|  type   |    否    | string | image  |                   元素类型                    |
| imgType |    否    | number |   0    |            图片类型：0-矩形 1-圆形            |
| urlType |    否    | number |   0    | 图片路径类型：0-网络路径，1-base64 2-本地路径 |
|   url   |    否    | string |        |                   图片路径                    |
|  width  |    否    | number |        |                   图像宽度                    |
| height  |    否    | number |        |                   图像高度                    |
|    X    |    否    | number |        |                    坐标 X                     |
|    Y    |    否    | number |        |                    坐标 Y                     |

- 图像绘制（圆形图像）

| 参数名  | 是否必传 |  类型  | 默认值 |                     说明                      |
| :-----: | :------: | :----: | :----: | :-------------------------------------------: |
|  type   |    否    | string | image  |                   元素类型                    |
| imgType |    否    | number |   1    |            图片类型：0-矩形 1-圆形            |
| urlType |    否    | number |   0    | 图片路径类型：0-网络路径，1-base64 2-本地路径 |
|   url   |    否    | string |        |                   图片路径                    |
| roundX  |    否    | number |        |                 圆心 X 轴坐标                 |
| roundY  |    否    | number |        |                 圆心 Y 轴左边                 |
| roundR  |    否    | number |        |                    圆半径                     |

- 矩形绘制（实心）

| 参数名 | 是否必传 |  类型  | 默认值 |   说明   |
| :----: | :------: | :----: | :----: | :------: |
|  type  |    否    | string | shape | 元素类型 |
|  shapeType  |    否    | string | 0实心矩形｜1实心圆 | 元素类型 |
| width  |    否    | number |        |   宽度   |
| height |    否    | number |        |   高度   |
| color  |    否    | string |        | 矩形颜色 |
|   X    |    否    | number |        | X 轴坐标 |
|   Y    |    否    | number |        | Y 轴坐标 |

- 圆角矩形绘制（实心）

| 参数名 | 是否必传 |  类型  | 默认值 |   说明   |
| :----: | :------: | :----: | :----: | :------: |
|  type  |    否    | string | shape | 元素类型 |
|  shapeType  |    否    | string | 0实心矩形/1实心圆 /2圆角矩形| 元素类型 |
| width  |    否    | number |        |   宽度   |
| height |    否    | number |        |   高度   |
| roundR  |    否    | number |        | 圆半径 |
| color  |    否    | string |        | 矩形颜色 |
|   X    |    否    | number |        | X 轴坐标 |
|   Y    |    否    | number |        | Y 轴坐标 |


- 实心圆绘制

| 参数名 | 是否必传 |  类型  | 默认值 |   说明   |
| :----: | :------: | :----: | :----: | :------: |
|  type  |    否    | string | shape | 元素类型 |
|  shapeType  |    否    | string | 0实心矩形/1实心圆 | 元素类型 |
| roundY  |    否    | number |        |   圆心Y轴   |
| roundX |    否    | number |        |   圆心X轴     |
| roundR  |    否    | number |        | 圆半径 |
|   color    |    否    | string |        | 颜色 |

#### 版本说明

- 支持圆形图像绘制

- 支持 base64 图像地址

- 修改 urlType 参数 （old：1-本地路径，2-网络路径，3-base64（暂不支持））

- 支持矩形绘制

- 支持实心圆绘制（添加shapeType字段）

- 添加圆角矩形绘制

#### 关于作者

(使用过程如有疑问或改善意见，由衷欢迎咨询)

微信: cxl1249587790 (备注来源)

email: cxltop@163.com
