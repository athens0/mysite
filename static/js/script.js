var ls = document.getElementsByClassName('hover');
var direction = 0;
var cur = 0, last = -1;
var delayTime = 250, sleepTime = 2000;

for(let i = 0; i < ls.length; i++){
    ls[i].addEventListener(
        "mouseenter",
        (event) => {
            if(direction < 2){
                direction += 2;
            }
            changeToZero();
        }
    );
    ls[i].addEventListener(
        "mouseout",
        (event) => {
            if(direction > 1){
                direction -= 2;
            }
            if(direction == 0){
                cur = 0;
            }else{
                cur = ls.length - 1;
            }
            changeToZero();
        }
    );
}


function changeToZero(reset = false){
    if (last == -1) return;

    ls[last].style.color = '';
    ls[last].style.fontSize = '';
    ls[last].style.filter = '';

    if(reset){
        last = -1;
    }
}


function nickChange(){
    if(direction > 1){
        setTimeout(nickChange, sleepTime);
        return;
    }
    ls[cur].style.color = 'var(--main-color-hl)';
    ls[cur].style.fontSize = '105%';
    ls[cur].style.filter = 'drop-shadow(0 0 1rem var(--main-color-hl))';
    if(last != -1){
        changeToZero();
    }
    last = cur;
    if(direction == 1){
        cur--;
        if(cur < 0){
            cur = 0;
            direction = 0;
            setTimeout(changeToZero, delayTime, true);
            setTimeout(nickChange, sleepTime);
        }else{
            setTimeout(nickChange, delayTime);
        }
    }else{
        cur++;
        if(cur >= ls.length){
            cur = ls.length - 1;
            direction = 1;
            setTimeout(changeToZero, delayTime, true);
            setTimeout(nickChange, sleepTime);
        }else{
            setTimeout(nickChange, delayTime);
        }
    }
}

setTimeout(nickChange, sleepTime);