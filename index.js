let btns = document.querySelectorAll(".control-btn");
const redDot = document.querySelector(".red-dot")


let time = document.querySelector("#time")
console.log(btns);
let count = 0;
let sec = 0;
let minute = 0;


for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click",()=>{
        if(i==0){
             a= setInterval(()=>{
                redDot.classList.add("active")
                count++;
                time.textContent=`${minute}m:${sec}s:${count}ms`;
                if(count==60){
                    sec++;
                    count=0;
                    time.textContent=`${minute}m:${sec}s:${count}ms`;
                   
                    

                    if(sec==60) {
                        minute++;
                        count=0;
                        sec=0;
                        time.textContent=`${minute}m:${sec}s:${count}ms`;
                        
                    }

                }
             },10)

        }
        else if(i==1) {
            clearInterval(a);

        }
        else if(i==2) {
            clearInterval(a)
             count = 0;
             minute = 0;
             sec = 0;
             time.textContent = `${minute}m:${sec}s:${count}ms`;

            
        }
    })
}

