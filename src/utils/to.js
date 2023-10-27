export function secondsToMinutes(seconds) {
  var minutes = Math.floor(seconds / 60); // 获取分钟数
  var secondsRemaining = seconds % 60; // 获取剩余的秒数

  var minutesString = String(minutes).padStart(2, "0"); // 补零
  var secondsString = String(secondsRemaining).padStart(2, "0"); // 补零

  return minutesString + ":" + secondsString; // 返回结果
}
