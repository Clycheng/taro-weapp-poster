// 圆形渲染
export const roundRender = ({ ctx, roundY, roundX, roundR, color }) => {
  ctx.arc(roundX, roundY, roundR, 0, 2 * Math.PI);
  ctx.setFillStyle(color);
  ctx.fill();
};

// 矩形渲染
export const rectangleRender = ({ ctx, width, height, X, Y, color }) => {
  ctx.setFillStyle(color);
  ctx.fillRect(X, Y, width, height);
};

// 圆角矩形渲染
export const rectangleRadiusRender = ({
  ctx,
  width,
  height,
  roundR,
  X,
  Y,
  color,
}) => {
  if (2 * roundR > width || 2 * roundR > height) {
    return false;
  }

  ctx.save();
  ctx.translate(X, Y);
  // 绘制圆角边
  ctx.beginPath(0);
  //从右下角顺时针绘制，弧度从0到1/2PI
  ctx.arc(width - roundR, height - roundR, roundR, 0, Math.PI / 2);

  //矩形下边线
  ctx.lineTo(roundR, height);

  //左下角圆弧，弧度从1/2PI到PI
  ctx.arc(roundR, height - roundR, roundR, Math.PI / 2, Math.PI);

  //矩形左边线
  ctx.lineTo(0, roundR);

  //左上角圆弧，弧度从PI到3/2PI
  ctx.arc(roundR, roundR, roundR, Math.PI, (Math.PI * 3) / 2);

  //上边线
  ctx.lineTo(width - roundR, 0);

  //右上角圆弧
  ctx.arc(width - roundR, roundR, roundR, (Math.PI * 3) / 2, Math.PI * 2);

  //右边线
  ctx.lineTo(width, height - roundR);
  ctx.closePath();
  ctx.setFillStyle(color);
  ctx.fill();
  ctx.restore();
};

// 图形渲染
export const shapeRender = ({
  ctx,
  width,
  height,
  shapeType,
  X,
  Y,
  color,
  list,
  init,
  roundY,
  roundX,
  roundR,
}) => {
  const typeFn = [
    () => rectangleRender({ ctx, width, height, X, Y, color }),
    () => roundRender({ ctx, roundY, roundX, roundR, color }),
    () => rectangleRadiusRender({ ctx, width, height, X, Y, color, roundR }),
  ];
  typeFn[shapeType]();
  list.shift();
  init(list);
};
