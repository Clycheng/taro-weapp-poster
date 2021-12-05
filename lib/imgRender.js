import { downFile, base64src } from './downFile';

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
  roundR = 100,
  roundX = 100,
  roundY = 100,
}) => {
  // roundR 半径
  // roundX 圆心X
  // roundY 圆心Y

  ctx.save();
  ctx.beginPath();
  ctx.arc(roundX, roundY, roundR, 0, 2 * Math.PI);

  // ctx.arc(50, 50, 25, 0, 2 * Math.PI);
  ctx.clip();

  ctx.drawImage(url, roundX - roundR, roundY - roundR, roundR * 2, roundR * 2);

  // ctx.stroke();

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
  list,
  init,
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
  imgTypeFn[imgType]({
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
  list.shift();

  init(list);
};
