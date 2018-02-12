function $(selector){
    return document.querySelector(selector);
}

var page = $('.page');

$('.menu_toggle').addEventListener('click', function(){
    page.classList.toggle('menu');
});