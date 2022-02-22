import request from "../utils/request";

/**
 * 根据参数返回数据
 */
export function fetchNetwork(params: string, period: number = 300) {
  return request({
    url: `/monitorData?metricName=${params}&period=${period}`,
    method: "GET",
  });
}

/**
 * 内网出入带宽（Mbps）
 */
export function fetchLantraffic() {
  return request({
    url: "/lantraffic",
    method: "GET",
  });
}

/**
 * 外网出入包量 （个/s）
 */
export function fetchWanpkg() {
  return request({
    url: "/wanpkg",
    method: "GET",
  });
}

/**
 * 内网出入包量
 */
export function fetchLanpkg() {
  return request({
    url: "/lanpkg",
    method: "GET",
  });
}
