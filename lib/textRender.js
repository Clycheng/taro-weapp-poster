export const textRender = ({ text, X, Y, fontSize, color, ctx }) => {
  ctx.fillText(`${text || '请传入text字段'}`, X, Y);
  ctx.setFontSize(fontSize);
  ctx.setFillStyle(color);
};
