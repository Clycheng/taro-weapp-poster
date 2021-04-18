import {downloadFile} from "@tarojs/taro" 
 
 export const downFile = async ({url,success}) => {
    await downloadFile({
      url,
      success: res => {
        if (res?.statusCode === 200) {
          success&&success(res)
        }
      },
    });
  };