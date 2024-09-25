
let p1s=0;

let p2s=0;



let isgameOver=false;

const p1disp=document.querySelector('#p1Score')

const p2disp=document.querySelector('#p2Score')

const btn1=document.querySelector('#Player1')

const btn2=document.querySelector('#Player2')

const btn3=document.querySelector('#Reset')

const winSc=document.querySelector('#playupto')

let winningScore=parseInt(winSc.value);


winSc.addEventListener('change',function(){
    winningScore=parseInt(this.value)
})


btn1.addEventListener('click',function(){

    if(!isgameOver){
        p1s+=1;
        if(p1s===winningScore){
            isgameOver=true;
            p1disp.classList.add('winner');
            p2disp.classList.add('looser');
            btn1.disabled=true
            btn2.disabled=true

        }
         p1disp.textContent=p1s;

    }
    
})

btn2.addEventListener('click',function(){

    if(!isgameOver){
        p2s+=1;
        if(p2s===winningScore)
        {
            isgameOver=true
            p2disp.classList.add('winner');
            p1disp.classList.add('looser');

            btn1.disabled=true
            btn2.disabled=true
        }
        p2disp.textContent=p2s;

    }
   
})

btn3.addEventListener('click',function(){
    p1s=0;
    p2s=0;
    p1disp.textContent=p1s;
    p2disp.textContent=p2s;

    p1disp.classList.remove('winner','looser')
    p2disp.classList.remove('winner','looser')

    btn1.disabled=false
     btn2.disabled=false
})

