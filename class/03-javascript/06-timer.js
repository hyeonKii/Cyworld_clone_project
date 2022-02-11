const pressedBtn = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("auth").innerText = token

    let time = 10
    
    setInterval(function() {
        
        if(time >= 0) {
            document.getElementById("timer").innerText = time;
            time = time - 1
        }
    },1000)

}

