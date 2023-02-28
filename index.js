let a;
let date;
let time;
setInterval(() =>{
    a = new Date();
    date = a.toDateString();
    time = a.getHours() + ':' +a.getMinutes() + ':' +a.getSeconds();
    document.getElementById('time').innerHTML = time + ' ' + date;
},1000);

setInterval(() =>{
    a = new Date();
    date = a.toDateString();
    time = a.getUTCHours() + ':' +a.getUTCMinutes() + ':' +a.getUTCSeconds();
    document.getElementById('gmt-time').innerHTML = time + ' ' + date;
},1000);

document.getElementById('home-button').addEventListener("click", ()=>{
    document.getElementById('display-time').classList.add("visually-hidden");
    document.getElementById('home').classList.remove("visually-hidden");
});

document.getElementById('gmt-time-button').addEventListener("click", ()=>{
    document.getElementById('display-time').classList.remove("visually-hidden");
    document.getElementById('home').classList.add("visually-hidden");
    document.getElementById('utc-time').classList.remove("visually-hidden");
    document.getElementById('local-time').classList.add("visually-hidden");
});

document.getElementById('local-time-button').addEventListener("click", ()=>{
    document.getElementById('display-time').classList.remove("visually-hidden");
    document.getElementById('home').classList.add("visually-hidden");
    document.getElementById('local-time').classList.remove("visually-hidden");
    document.getElementById('utc-time').classList.add("visually-hidden");
});
