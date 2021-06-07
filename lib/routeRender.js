export const routeRender = ({list, init}) => {
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(100, 50);
  ctx.lineTo(130, 80);
  ctx.lineTo(100, 110);
  ctx.lineTo(50, 110);
  ctx.lineTo(20, 80);
  ctx.closePath();
  ctx.setStrokeStyle('red');
  ctx.setLineWidth(1);
  ctx.storke();
  list.shift();
  init(list);
};
