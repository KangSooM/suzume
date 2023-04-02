const clock = document.querySelector("#clock");

function getClock() {
    const Day = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const Ddate = new Date();
    const year = Ddate.getFullYear();
    const month = Ddate.getMonth()+1;
    const day = Day[Ddate.getDay()];
    const date = Ddate.getDate()
    const hours = String(Ddate.getHours()).padStart(2, "0");
    const minutes = String(Ddate.getMinutes()).padStart(2, "0");
    //const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${year}년 ${month}월 ${date}일 ${day} ${hours} : ${minutes}`;
}

//setInterval(sayHello, 5000); // 5s마다 반복

//setTimeout(sayHello, 5000); // delay 느낌

// const date = new Date();
// console.log(date.getSeconds());\

getClock();
setInterval(getClock, 1000);