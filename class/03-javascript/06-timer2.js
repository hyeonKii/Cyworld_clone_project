let isStarted = false;


const pressedBtn = () => {

    if (isStarted === false) {

        isStarted = true;

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("auth").innerText = token

    let time = 180
    let timer = null
    
    timer = setInterval(function() {
        
        if(time >= 0) {
            const min = String(Math.floor(time/60)).padStart(2, "0")
            const sec = String(time % 60).padStart(2, "0")
            document.getElementById("countdown").innerText = min + ":" + sec;
            time = time - 1
        } else {
            document.getElementById("finish").disabled = true; //비활성화는 disabled=true를 사용하면 가능
            isStarted = false;
            clearInterval(timer) //clearInterval 은 미리 지정한 timer에 할당한 값으로 이동
            
        }
    },1000)
    } else {
        alert("타이머가 이미 동작 중입니다")
    }    

}
