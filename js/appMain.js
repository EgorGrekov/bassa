var entranceForm = document.querySelector('.form__form');
var exitButton = document.querySelector('.btn__entrance');
var closedForm = document.querySelector('.form__button-reset')
var openBlackFone = document.querySelector('.body-container')

function entranceButtonBlocked() {
    entranceForm.classList.add('form__form_active');
    exitButton.classList.add('btn__entrance_active');
    openBlackFone.classList.add('container__active-bg');
}
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

