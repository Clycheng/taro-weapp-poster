export const textRender = ({
  text,
  X,
  Y,
  fontSize,
  color,
  ctx,
  list,
  init,
}) => {
  ctx.setFontSize(fontSize);
  ctx.setFillStyle(color);

  ctx.fillText(`${text || "请传入text字段"}`, X, Y);
  list.shift();

  init(list);
};
