import {$, $$} from './js/global.js';

const DARK_LOGO = "https://tmdm.com.ar/u/logo-new-dark.png";
const LIGHT_LOGO = "https://tmdm.com.ar/u/logo-new.png";
// Open navbar
$('.uil.uil-bars').addEventListener('click', () => {
    $('.nav__ul').style.backgroundColor = '#171717';
    let elArr = $$('.nav__ul > li');
    for(let i = 1; i < elArr.length; i++) {
        elArr[i].style.display = 'block';
    }
    $('.uil.uil-bars').style.display = 'none';
    $('.uil.uil-times').style.display = 'block';
    $('#logo > img').setAttribute('src', DARK_LOGO);
});
// Close navbar
$('.uil.uil-times').addEventListener('click', () => {
    $('.nav__ul').style.backgroundColor = 'unset';
    let elArr = $$('.nav__ul > li');
    for(let i = 1; i < elArr.length; i++) {
        elArr[i].style.display = 'none';
    }
    $('.uil.uil-bars').style.display = 'block';
    $('.uil.uil-times').style.display = 'none';
    $('#logo > img').setAttribute('src', LIGHT_LOGO);
});
console.log('hola')
// If the page is the index, load the indexScripts
if(window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/dist/'){
    import('./indexScripts.js');
}
