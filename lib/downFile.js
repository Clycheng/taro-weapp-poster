import {
  downloadFile,
  getFileSystemManager,
  base64ToArrayBuffer,
} from '@tarojs/taro';

export const downFile = async ({ url, success }) => {
  await downloadFile({
    url,
    success: (res) => {
      if (res?.statusCode === 200) {
        success && success(res);
      }
    },
  });
};

// base64下载
export const base64src = (base64data, cb) => {
  let src = base64data;
  const fsm = getFileSystemManager(); // 获取文件管理器
  src = src.replace(/\ +/g, ''); //去掉空格方法
  src = src.replace(/[\r\n]/g, '');
  const buffer = base64ToArrayBuffer(src);
  const times = Date.parse(new Date()) + Math.random(10);
  const fileName = wx.env.USER_DATA_PATH + `/${times}.png`;

  fsm.writeFileSync(fileName, buffer, 'base64');

  cb && cb(fileName);
  return fileName;
};
