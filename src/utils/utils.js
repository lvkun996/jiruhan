export function formatDuring(millisecond) {

  var days = parseInt(millisecond / (1000 * 60 * 60 * 24));

  var hours = parseInt((millisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = parseInt((millisecond % (1000 * 60 * 60)) / (1000 * 60));
  
  var seconds = parseInt(millisecond % (1000 * 60) / 1000 )

  var  milliseconds  = String((millisecond % (1000 * 60)  / 1000)).split('.')[1]

  return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 " + milliseconds + '毫秒';

}