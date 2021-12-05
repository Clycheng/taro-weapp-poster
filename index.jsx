import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@tarojs/components';
import { createCanvasContext, canvasToTempFilePath } from '@tarojs/taro';
import { textRender } from './lib/textRender';
import { imgRender } from './lib/imgRender';
import { shapeRender } from './lib/shapeRender';
import { routeRender } from './lib/routeRender';

const Index = ({
  height = '414rpx',
  width = '896rpx',
  opacity = 1,
  background = 'white',
  onRender,
  list = [],
  style,
}) => {
  const ctx = createCanvasContext('shareCanvas');
  // console.log('object', createCanvasContext, canvasToTempFilePath);
  // const ctx = 1;

  const tpyeFn = {
    text: (obj) => textRender({ ...obj, ctx }),
    image: async (obj) => await imgRender({ ...obj, ctx }),
    shape: (obj) => shapeRender({ ...obj, ctx }),
    // route: (obj) => shapeRender({...obj, ctx}),
  };
  const init = async (list) => {
    if (list.length === 0) {
      ctx.draw(true, () => {
        canvasToTempFilePath({
          canvasId: 'shareCanvas',
          success: (res) => {
            onRender && onRender(res);
          },
          fail: (res) => {
            console.warn('fail', res);
          },
          complete: (res) => {
            console.log('complete', res);
          },
        });
      });
      return false;
    }
    const item = list[0];

    await tpyeFn[item?.type]({ ...item, init, list });
  };

  useEffect(() => {
    init(list);
  }, []);

  return (
    <>
      <Canvas
        id="shareCanvas"
        canvasId="shareCanvas"
        style={{
          position: 'absolute',
          left: `-${width}`,
          top: `-${height}`,
          width,
          height,
          opacity,
          background,
          ...style,
        }}
        disableScroll
      ></Canvas>
    </>
  );
};

Index.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  opacity: PropTypes.number,
  background: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};
export default Index;
