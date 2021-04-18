 export const textRender = ({ text, left, top, fontSize, color ,ctx}) => {
    ctx.fillText(`${text || '请传入text字段'}`, left, top);
    ctx.setFontSize(fontSize);
    ctx.setFillStyle(color);
  };