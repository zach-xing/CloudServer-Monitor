import axios, { AxiosRequestConfig } from "axios";

/**
 * 临时写着，具体请求视服务器而定
 */

interface ResponseType<T = any> {
  code: number;
  message: string;
  data: T;
}

const instance = axios.create({
  baseURL: "https://qclzas.api.cloudendpoint.cn/",
  // timeout: 5000,
});

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

const request = async <T = any>(
  config: AxiosRequestConfig
): Promise<ResponseType<T>> => {
  try {
    const { data } = await instance.request<ResponseType<T>>(config);
    return data;
  } catch (err: any) {
    const message = err.message || "请求失败";
    return {
      code: -1,
      message,
      data: null as any,
    };
  }
};

export default request;
