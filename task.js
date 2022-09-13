let date = new Date();
let newYearDate = new Date(0);
newYearDate.setFullYear(date.getFullYear()+1);
let timeMillis = newYearDate.getTime() - date.getTime();
console.log(timeMillis/(1000*60*60*24));