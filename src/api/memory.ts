import request from "../utils/request";

export function fetchMemory(params: string, period: number = 3600) {
  return request({
    url: `/monitorData?metricName=${params}&period=${period}`,
    method: "GET",
  });
}