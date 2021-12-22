export const getFormatedDate = (date) => {
  var todayTime = new Date(date);
  var month = todayTime.getMonth() + 1;
  var day = todayTime.getDate();
  var year = todayTime.getFullYear();
  // console.log(day + '/' + month + '/' + year);
  return day + '/' + month + '/' + year;
};
