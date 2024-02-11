let cir = document.querySelector("div.circle");
let bg = document.querySelector("#bg");
let flag = 0;

cir.addEventListener('click', () => {
    if(flag == 0) {
        bg.classList.add('size');
        flag = 1;
    }
    else {
        bg.classList.remove('size');
        flag = 0;
    }
})