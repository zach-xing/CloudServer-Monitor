import request from "../utils/request";

export function fetchMemory(params: string) {
  return request({
    url: `/monitorData?metricName=${params}&period=3600`,
    method: "GET",
  });
}