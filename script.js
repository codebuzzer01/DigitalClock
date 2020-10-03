function showtime(){
    let date = new Date()
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
 let formatHours = convertFormat(hours)
 hours = checktime(hours)
 hours = addzero(hours)
 mins = addzero(mins)
 secs = addzero(secs)
 document.querySelector('#clock').innerHTML = `${hours} : ${mins} : ${secs} ${formatHours}`
}
function convertFormat(time){
    let format = 'AM'
    if(time>=12){
        format='PM'
    }
    return format
}
function checktime(time){
    if(time>12){
        time=time-12
    }
    if(time=== 0){
        time = 12
    }
    return time
}
function addzero(time){
    if(time<10){
        time=`0${time}`
    }
    return time
}
showtime()

setInterval(showtime,1000)


   

