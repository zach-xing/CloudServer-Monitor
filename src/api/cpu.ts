import request from "../utils/request";

/**
 * 获取 CPU 的相关数据
 */
export function fetchCPU(params: string) {
  return request({
    url: `/monitorData?metricName=${params}&period=300`,
    method: "GET",
  });
}
