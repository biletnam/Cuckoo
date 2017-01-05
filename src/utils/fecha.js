import fecha from 'fecha';

fecha.i18n = {
  dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  amPm: ['上午', '下午'],
  // D is the day of the month, function returns something like...  3rd or 11th
  DoFn: function (D) {
    return D + [ 'th', 'st', 'nd', 'rd' ][ D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10 ];
  },
};

fecha.masks = {
  default: 'ddd MMM DD YYYY',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS',
};

const YYYYMMDD = 'YYYYMMDD';

fecha.getDateString = (date, format) => fecha.format(fecha.parse(date, YYYYMMDD), format || 'YYYY[年]MM[月]DD[日]');

fecha.addDate = (date, number) => {
  let dateObject = date.toString()
  if (typeof dateObject !== 'object') {
    dateObject = new Date(`${dateObject.slice(0, 4)}, ${dateObject.slice(4, 6)}, ${dateObject.slice(6, 8)}`);
  }
  let dateSort = fecha.format(dateObject.setDate(dateObject.getDate() + number), YYYYMMDD);
  return dateSort;
}

export default fecha;
