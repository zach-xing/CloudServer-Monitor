import request from "../utils/request";

/**
 * 获取 CPU 的相关数据
 */
export function fetchCPU(params: string, period: number = 300) {
  return request({
    url: `/monitorData?metricName=${params}&period=${period}`,
    method: "GET",
  });
}
