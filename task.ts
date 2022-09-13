let date = new Date();
date.setHours(date.getHours()+8)//UTS+8))
let newYearDate = new Date(0);
newYearDate.setFullYear(date.getFullYear()+1);

let timeMillis = newYearDate.getTime() - date.getTime();


let days = parseInt(timeMillis/(1000*60*60*24))
let hours = parseInt((timeMillis - days*1000*60*60*24)/(1000*60*60));
let minutes = parseInt((timeMillis - days*1000*60*60*24 - hours*1000*60*60)/(1000*60));
console.log("До нового года осталось " + days + " дней, " + hours + " часов и " + minutes + " минут!");
