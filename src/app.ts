import moment from 'moment';
import { message } from 'antd';
import { RequestConfig } from 'umi';
import { ResponseInterceptor, RequestOptionsInit, RequestInterceptor } from 'umi-request';
import qs from 'qs';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.less';
import '@/assets/styles/reset.less';
import '@/assets/styles/global.less';

moment.locale('zh-cn');
message.config({ maxCount: 1 });

// 注册全局变量
export async function getInitialState() {
  // const { data = {} } = await getUserInfo();
  const data = {}
  return { userInfo: data };
}

const responseInterceptor: ResponseInterceptor = async (response: Response, options: RequestOptionsInit) => {
  const SERVICE_NAME = 'service';
  const REDIRECT_NAME = 'redirectUrl';
  const data = await response.clone().json();
  switch (data.code) {
    case 2000: {
      // 请求成功
      break;
    }
    case 3003: {
      // 未登录
      const locationUrl = new URL(data.location);
      const returnUrl = new URL(locationUrl.searchParams.get(SERVICE_NAME) as string);
      returnUrl.searchParams.set(REDIRECT_NAME, window.location.href);
      const returnUrlString = returnUrl.toString();
      locationUrl.searchParams.set(SERVICE_NAME, returnUrlString);
      window.location.href = locationUrl.toString();
      break;
    }
    default: {
      message.error(data.message || data.msg);
      break;
    }
  }
  return data;
};

const requestInterceptor: RequestInterceptor = (url, options) => {
  const param = location.search.split('?')[1];
  const { appId } = qs.parse(param);
  if(options.headers && appId)(options.headers as any).appId = appId;
  return {
    url,
    options
  }
}

export const request: RequestConfig = {
  timeout: 1000 * 6,
  credentials: 'include',
  errorConfig: {
    // 覆盖原有的错误处理
    adaptor: () => {
      return {
        success: true,
      };
    },
  },
  responseInterceptors: [responseInterceptor],
  requestInterceptors: [requestInterceptor]
};

message.config({
  maxCount: 1,
});

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('app1 bootstrap----', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('app1 mount-----', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app1 unmount-----', props);
  },
};
