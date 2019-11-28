//popup1
var picState = 0;
function rightPic() {
    if (picState != 4) {
        picState = picState + 1;
    }
    imagePicker();
}
function imagePicker() {
    switch (picState) {
        case 0: document.getElementById('portpic1').src = './static/img/project/1/pic-1.jpeg';
            break;
        case 1: document.getElementById('portpic1').src = './static/img/project/1/pic-2.jpeg';
            break;
        case 2: document.getElementById('portpic1').src = './static/img/project/1/pic-3.jpeg';
            break;
        case 3: document.getElementById('portpic1').src = './static/img/project/1/pic-4.jpeg';
            break;
        case 4: document.getElementById('portpic1').src = './static/img/project/1/pic-5.jpeg';
            break;
    }
}
function leftPic() {
    if (picState != 0) {
        picState = picState - 1;
    }
    imagePicker();
}
//popup3
var picState2 = 0;
function rightPic2() {
    if (picState2 != 3) {
        picState2 = picState2 + 1;
    }
    imagePicker2();
}
function imagePicker2() {
    switch (picState2) {
        case 0: document.getElementById('portpic2').src = './static/img/project/2/homepage.PNG';
            break;
        case 1: document.getElementById('portpic2').src = './static/img/project/2/studentpage.PNG';
            break;
        case 2: document.getElementById('portpic2').src = './static/img/project/2/coursepage.PNG';
            break;
        case 3: document.getElementById('portpic2').src = './static/img/project/2/instructorpage.PNG';
            break;
    }
}
function leftPic2() {
    if (picState2 != 0) {
        picState2 = picState2 - 1;
    }
    imagePicker2();
}

//popup2
var picState3 = 0;
function rightPic3() {
    if (picState3 != 2) {
        picState3 = picState3 + 1;
    }
    imagePicker3();
}
function imagePicker3() {
    switch (picState3) {
        case 0: document.getElementById('portpic3').src = './static/img/project/3/image5.PNG';
            break;
        case 1: document.getElementById('portpic3').src = './static/img/project/3/image6.PNG';
            break;
        case 2: document.getElementById('portpic3').src = './static/img/project/3/image7.PNG';
            break;
    }
}
function leftPic3() {
    if (picState3 != 0) {
        picState3 = picState3 - 1;
    }
    imagePicker3();
}