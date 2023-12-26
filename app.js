let h2 = document.getElementById("h2")


const getTime = () => {


    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    let day = new Date().getDay()
    let hours = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()


    let hozirgivaqt = `hozir ${year} yil va ${month + 1}-oy,${day} -kun, soat ${hours} <span>:</span> ${minute} <span>:</span> ${second}`
    console.log(hozirgivaqt);
    h2.innerHTML = hozirgivaqt




}

setInterval(function () {
    vaqt
getTime()

}, 1000)



// console.log(year);
// console.log(month  +1);
// console.log(day);
// console.log(hours);
// console.log(minute);
// console.log(second);
