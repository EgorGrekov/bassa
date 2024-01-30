//burger menu
var headerContent = document.querySelector('.header');
var sectionsContent = document.querySelector('.sections');
var blurContent = document.querySelector('.blur-content');
var closedBurger = document.querySelector('.burger__menu-entrance');
var userToch = document.getElementById('burgerOpen');
var burgerOpen = document.querySelector('.burger__menu');
var listOpen = document.querySelector('.open__list');
var listActiveClass = document.querySelector('.container__list ');

var containerAplication = document.querySelector('.conteiner__aplication');
var blockAplication = document.querySelector('.block__aplication');
var openAplication = document.querySelector('.open__aplication');
var interContainer = document.querySelector('.inter__container ')

function openList (){
    listActiveClass.classList.add('list__active');
    headerContent.classList.add('blur-content');
    sectionsContent.classList.add('blur-content');
}
listOpen.onclick = openList;

function openBurgerMenu () {
    burgerOpen.classList.add('open__burger');
    headerContent.classList.add('blur-content');
    sectionsContent.classList.add('blur-content');
};
userToch.onclick = openBurgerMenu;


//alication
function openAplicationBlock () {
    containerAplication.classList.add('active-aplication');
    headerContent.classList.add('blur-content');
    sectionsContent.classList.add('blur-content');
}
openAplication.onclick = openAplicationBlock;


function closedBurgerMenu () {
    burgerOpen.classList.remove('open__burger');
    headerContent.classList.remove('blur-content');
    sectionsContent.classList.remove('blur-content');
};
closedBurger.onclick = closedBurgerMenu;
//
document.addEventListener('click', function(event) {
    if (burgerOpen.classList.contains('open__burger')){
        if (!event.target.closest('.burger__menu') && !event.target.closest('#burgerOpen')) {
            burgerOpen.classList.remove('open__burger');
            headerContent.classList.remove('blur-content');
            sectionsContent.classList.remove('blur-content');
          }
    }
    else if (containerAplication.classList.contains('active-aplication')){
        if (!event.target.closest('.table__aplication') && !event.target.classList.contains('open__aplication')) {
            containerAplication.classList.remove('active-aplication');
            headerContent.classList.remove('blur-content');
            sectionsContent.classList.remove('blur-content');
          }
    }
    else if (listActiveClass.classList.contains('list__active')){
        if (!event.target.closest('.block__list') && !event.target.classList.contains('open__list')) {
            listActiveClass.classList.remove('list__active');
            headerContent.classList.remove('blur-content');
            sectionsContent.classList.remove('blur-content');
          }
    }
});





// var headerContent = document.querySelector('.header');
// var sectionsContent = document.querySelector('.sections');
// var closedBurger = document.querySelector('.burger__menu-entrance');
// var userToch = document.getElementById('burgerOpen');
// var burgerOpen = document.querySelector('.burger__menu');

// // Checking for the existence of elements
// if (userToch && burgerOpen && headerContent && sectionsContent && closedBurger) {
//     userToch.onclick = openBurgerMenu;
//     closedBurger.onclick = closedBurgerMenu;
// }

// //alication
// var containerAplication = document.querySelector('.conteiner__aplication');
// var blockAplication = document.querySelector('.block__aplication');
// var openAplication = document.querySelector('.open__aplication');
// var interContainer = document.querySelector('.inter__container ');

// if (openAplication && containerAplication && headerContent && sectionsContent) {
//     openAplication.onclick = openAplicationBlock;
// }

// function openBurgerMenu() {
//     burgerOpen.classList.add('open__burger');
//     headerContent.classList.add('blur-content');
//     sectionsContent.classList.add('blur-content');
// }

// // function closedBurgerMenu() {
// //     burgerOpen.classList.remove('open__burger');
// //     headerContent.classList.remove('blur-content');
// //     sectionsContent.classList.remove('blur-content');
// // }

// function openAplicationBlock() {
//     containerAplication.classList.add('active-aplication');
//     headerContent.classList.add('blur-content');
//     console.log(headerContent);
//     sectionsContent.classList.add('blur-content');
// }

// document.addEventListener('click', function(event) {
//     if (!event.target.closest('.burger__menu') && !event.target.closest('#burgerOpen')) {
//         burgerOpen.classList.remove('open__burger');
//         headerContent.classList.remove('blur-content');
//         sectionsContent.classList.remove('blur-content');
//     }
// });







//form

var entranceForm = document.querySelector('.form__form');
var exitButton = document.querySelector('.btn__entrance');
var closedForm = document.querySelector('.form__button-reset');
var openBlackFone = document.querySelector('.body-container');

function entranceButtonBlocked() {
    entranceForm.classList.add('form__form_active');
    exitButton.classList.add('btn__entrance_active');
    openBlackFone.classList.add('container__active-bg');
};
exitButton.onclick = entranceButtonBlocked;

function closedformClick () {
    entranceForm.classList.remove('form__form_active');
    exitButton.classList.remove('btn__entrance_active');
    openBlackFone.classList.remove('container__active-bg');
};

closedForm.onclick =  closedformClick;

const element = document.querySelector('.form__selects');
const choices = new Choices(element, {
    searchEnabled: true,
    itemSelectText: "", 
});

