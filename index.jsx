import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@tarojs/components';
import { createCanvasContext, canvasToTempFilePath } from '@tarojs/taro';
import { textRender } from './lib/textRender';
import { imgRender } from './lib/imgRender';

const Index = ({
  height = '414rpx',
  width = '896rpx',
  opacity = 1,
  background = 'white',
  onRender,
  list = [],
}) => {
  const ctx = createCanvasContext('shareCanvas');

  const tpyeFn = {
    text: (obj) => textRender({ ...obj, ctx }),
    image: (obj) => imgRender({ ...obj, ctx }),
  };
  const init = () => {
    list.forEach(async (item, index) => {
      await tpyeFn[item?.type](item);
      if (index === list?.length - 1) {
        ctx.draw(false, (res) => {
          canvasToTempFilePath({
            canvasId: 'shareCanvas',
            success: (res) => {
              onRender && onRender(res);
            },
          });
        });
      }
    });
  };

  useEffect(() => {
    init();
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
          // display: 'none',
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
