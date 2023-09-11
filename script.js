let wish = document.getElementById('wish')
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let modalimage1 = document.getElementById('modalimage1');
let modalimage2 = document.getElementById('modalimage2');
let result = document.getElementById('result');
let textresult = document.getElementById('textresult');
let warningwish = document.getElementById('warningwish');
let resultwish = document.getElementById('resultwish');
let showwish = document.getElementById('showwish');
let showresult = document.getElementById('showresult');


let modalwish = new bootstrap.Modal(warningwish);
let modalresultwish = new bootstrap.Modal(resultwish);

let question = './asset/image/question.png';
let pathimage1 = './asset/image/image1.png';
let pathimage2 = './asset/image/image2.png';

imagequestion();
result.style.display = 'none';

let num1 = 1, num2 = 1;

function imagequestion() {
    image1.src = question;
    image2.src = question;
}

function checkrandom() {
    if (wish.value === '') {
        modalwish.show();
    } else {
        random();
        result.style.display = 'block';
    }
}

function random() {
    num1 = Math.floor(Math.random() * 2);
    num2 = Math.floor(Math.random() * 2);
    num1 += 1;
    num2 += 1;
    if (num1 == 1) {
        image1.src = pathimage1;
        image1.style.transform = 'rotate(180deg)';
        modalimage1.src = pathimage1;
        modalimage1.style.transform = 'rotate(180deg)';
    } else if (num1 == 2) {
        image1.src = pathimage2;
        image1.style.transform = 'rotate(0deg)';
        modalimage1.src = pathimage2;
        modalimage1.style.transform = 'rotate(0deg)';
    }
    if (num2 == 1) {
        image2.src = pathimage1;
        image2.style.transform = 'rotate(0deg)';
        modalimage2.src = pathimage1;
        modalimage2.style.transform = 'rotate(0deg)';
    } else if (num2 == 2) {
        image2.src = pathimage2;
        image2.style.transform = 'rotate(180deg)';
        modalimage2.src = pathimage2;
        modalimage2.style.transform = 'rotate(180deg)';
    }
}

function results() {
    showwish.innerHTML = wish.value;
    if (num1 == 1 && num2 == 1) {
        textresult.innerHTML = "เฉี่ยปวย";
        showresult.innerHTML = "โยนถามใหม่อีกครั้ง";
    } else if (num1 == 2 && num2 == 2) {
        textresult.innerHTML = "อิมโปย";
        showresult.innerHTML = "ไม่เป็นไปตามปรารถนา";
    } else {
        textresult.innerHTML = "เซ้งปวย";
        showresult.innerHTML = "เป็นไปตามปรารถนา";
    }
    modalresultwish.show();
}
