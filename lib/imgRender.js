import { downFile, base64src } from "./downFile";

// 矩形图片渲染
export const rectangle = ({ ctx, url, width, height, X, Y }) => {
  ctx.restore();
  ctx.drawImage(url, X, Y, width, height);
  ctx.restore();
};

// 圆型图片渲染
export const roundRender = ({
  ctx,
  url,
  width,
  height,
  roundR = 100,
  roundX = 100,
  roundY = 100,
  sAngle = 0,
  eAngle = 2 * Math.PI,
}) => {
  // roundR 半径
  // roundX 圆心X
  // roundY 圆心Y

  ctx.save();
  ctx.beginPath();
  ctx.arc(roundX, roundY, roundR, sAngle, eAngle);
  ctx.clip();
  ctx.drawImage(
    url,
    roundX - roundR,
    roundY - roundR,
    width || roundR * 2,
    height || roundR * 2
  );
  ctx.restore();
};

// 图片渲染
export const imgRender = async ({
  imgType,
  urlType,
  url,
  width,
  height,
  X,
  Y,
  roundY,
  roundX,
  roundR,
  ctx,
  sAngle,
  eAngle,
}) => {
  const imgTypeFn = [
    (object) => rectangle({ ...object, ctx }),
    (object) => roundRender({ ...object, ctx }),
  ];

  let newUrl = url;

  const downFn = [
    async (url) =>
      await downFile({
        url,
        success: (res) => {
          newUrl = res?.tempFilePath;
        },
      }),
    async (url) =>
      await base64src(url, (res) => {
        newUrl = res;
      }),
  ];
  await downFn[urlType]?.(url);

  console.log("object2", newUrl);
  await imgTypeFn[imgType]({
    width,
    height,
    X,
    Y,
    roundY,
    roundX,
    roundR,
    url: newUrl,
    ctx,
    sAngle,
    eAngle,
  });
};
