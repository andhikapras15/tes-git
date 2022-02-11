//set interval 
let detik = 0 
let timer 
let timer= setInterval(() => {
    detik++
    console.log('jalan ke'+detik)
    if(detik ==5){
        clearInterval(timer)
    }
}, 1000);