let time = getTimeBeforeNY();
console.log("До нового года осталось " + time[0] + " дней, " + time[1] + " часов и " + time[2] + " минут!");

function getTimeBeforeNY(){
    let date = new Date();
    date.setHours(date.getHours()+8)//UTF+8))
    let newYearDate = new Date(0);
    newYearDate.setFullYear(date.getFullYear()+1);
    
    let timeMillis = newYearDate.getTime() - date.getTime();
    
    
    let days = Math.floor(timeMillis/(1000*60*60*24))
    let hours = Math.floor((timeMillis - days*1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor((timeMillis - days*1000*60*60*24 - hours*1000*60*60)/(1000*60));

    return [days, hours, minutes];
}