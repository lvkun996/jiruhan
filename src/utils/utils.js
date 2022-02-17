/**
 * 
 * @param { number } millisecond  时间戳
 * @returns 返回当前时间字符串
 * 
 */

export function formatDuring(millisecond) {

  var days = parseInt(millisecond / (1000 * 60 * 60 * 24));

  var hours = parseInt((millisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = parseInt((millisecond % (1000 * 60 * 60)) / (1000 * 60));
  
  var seconds = parseInt(millisecond % (1000 * 60) / 1000 )

  var  milliseconds  = String((millisecond % (1000 * 60)  / 1000)).split('.')[1]

  return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 " + milliseconds + '毫秒';

}


/**
 * @description 获取设备型号
 * @returns { model: 1 }  0 android 1 ios
 */

export function getDeviceModel () {

  var u = navigator.userAgent;
  var device =""; //当前设备信息
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
      device = "0";
  } else if (u.indexOf('iPhone') > -1) {//苹果手机
    device = "1";
  }

  return device

}