import {$, $$} from './js/global.js';

const IMG_URLS = [
    "assets/taller.jpg",
    "assets/enganche.jpg",
    "assets/enganche-col.jpg",
    "assets/kia.jpg",
]
const generateDots = () => {
    let dots = '';
    for(let i = 0; i < IMG_URLS.length; i++){
        dots += `<div class="dot"></div>`;
    }
    $('.dots').innerHTML = dots;
}
const apply = ()=>{
    $('#img1').style.cssText = `
        z-index: 4;
        opacity: 1;
    `;
    $('#img2').style.cssText = `
        opacity: 0.5;
        z-index: 3;
    `;
}
const changeRightTo = (st) =>{
    $('#img2').setAttribute('src', IMG_URLS[st]);
}
const changeLeftTo = (st) =>{
    $('#img1').setAttribute('src', IMG_URLS[st]);
}
$('.r-arrow').style.zIndex = 99;
let count = 1;
let lcount = 0;
let sCount = 0;
$('.r-arrow').addEventListener('click', () => {
    if(sCount == 1) sCount--;
    count < IMG_URLS.length - 1 ? count++ : count = 0;
    changeRightTo(count);
    count == 0 ? lcount = IMG_URLS.length - 1 : lcount = count-1;
    changeLeftTo(lcount);
    // changeIds();
    apply();
    for(let i = 0; i < IMG_URLS.length; i++) {
        $('.dots').children[i].id = '';
    }
    $('.dots').children[lcount].id = 'dot-active';
    sCount++;
})
generateDots();
$('.dots').children[0].id = 'dot-active';

$('#quotation').addEventListener('click', () => {
    $('.quotation').style.display = 'flex';
});
$('#quit').addEventListener('click', () => {
    $('.quotation').style.display = 'none';
});
$('#next').addEventListener('click', () => {
    $('.step-one').style.display = 'none';
    $('.step-two').style.display = 'block';
});
const st4URL = (url)=>{
    return encodeURIComponent(url);
}
$('#wp').addEventListener('click', () => {
    let model = $('#model').value;
    model = st4URL(`Hola, quisiera saber el precio de un enganche para ${model}`);
    window.open(`https://wa.me/542235388441?text=${model}&app_absent=1`)
});
$('#email').addEventListener('click', () => {
    $('.step-two').style.display = 'none';
    $('.step-three').style.display = 'block';
});
// Disable Enter Key
$('body').addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        e.preventDefault();
    }
});