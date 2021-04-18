import { downFile } from './downFile';

// 矩形图片渲染
export const rectangle = ({ ctx, url, width, height, left, top }) => {
  ctx.restore();
  ctx.drawImage(url, left, top, width, height);
};
// 图片渲染
export const imgRender = async ({
  imgType,
  urlType,
  url,
  width,
  height,
  left,
  top,
  ctx,
}) => {
  const imgTypeFn = [(object) => rectangle({ ...object, ctx })];
  let newUrl = url;
  if (urlType === 2) {
    await downFile({
      url,
      success: (res) => {
        newUrl = res?.tempFilePath;
      },
    });
  }
  await imgTypeFn[imgType]({ width, height, left, top, url: newUrl, ctx });
};
