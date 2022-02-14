import numeral from "numeral";

/**
 * 转换为百分数
 */
export function tofPercent(number: number) {
  return numeral(number / 100).format("0.0%");
}

/**
 * 转换为数字（有千位分隔符）
 */
export function tofNumber(number: string | number) {
  return numeral(number).format();
}

/**
 * 转换为数字
 */
export function toNumber(number: string):number {
  return numeral(number).value() as number;
}

/**
 * 传入两个数据，返回它们的差
 */
export function toNumberWithSub(number1: string | number, number2: string | number): number {
  return numeral(
    (numeral(number1).value() as number) - (numeral(number2).value() as number)
  ).value() as number;
}

/**
 * 将时间戳转时间
 */
export function toTime(time: number): string {
  const unixTimestamp = new Date(time * 1000);
  const commonTime = unixTimestamp.toLocaleString();
  
  return commonTime.split(" ")[1].slice(0, -3);
}