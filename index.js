let btns = document.querySelectorAll(".control-btn");
const redDot = document.querySelector(".red-dot")


let time = document.querySelector("#time")
console.log(btns);
let count = 0;
let minute = 0;
let hr = 0;
let ispaused = true

for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click",()=>{
        if(i==0){
             a= setInterval(()=>{
                const angle = (count % 60) * 6;
                redDot.style.transform = `rotate(${angle}deg)`;
                count++;
                time.textContent=`${hr}h:${minute}m:${count}s`;
                if(count==60){
                    minute++;
                    count=0;
                    time.textContent=`${hr}h:${minute}m:${count}s`;
                   
                    

                    if(minute==60) {
                        hr++;
                        count=0;
                        minute=0;
                        time.textContent=`${hr}h:${minute}m:${count}s`;
                        
                    }

                }
             },1000)

        }
        else if(i==1) {
            clearInterval(a);

        }
        else if(i==2) {
            clearInterval(a)
             count = 0;
             minute = 0;
             hr = 0;
             time.textContent = `${hr}h:${minute}m:${count}s`;

            
        }
    })
}

