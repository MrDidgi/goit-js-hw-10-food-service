// шаблонизация
import markup from './markup.hbs'
import recipesJson from './menu.json'

const markupReady = markup(recipesJson);
const ulElement = document.querySelector('.menu.js-menu');
ulElement.insertAdjacentHTML('beforeend', markupReady);


// работа с темой страницы
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyElement = document.querySelector('body');
const colorPickerButton = document.querySelector('#theme-switch-toggle'); 

const themeChecker = function () {
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") === Theme.DARK) {
            bodyElement.classList.add(Theme.DARK);
            bodyElement.classList.remove(Theme.LIGHT);
            colorPickerButton.setAttribute("checked", true);
        } 
        else if (localStorage.getItem("theme") === Theme.LIGHT) {
            bodyElement.classList.add(Theme.LIGHT);
            bodyElement.classList.remove(Theme.DARK);
            // colorPickerButton.setAttribute("checked", false);
        };
    };
    return;
};

themeChecker();

const colorChanger = function (event) {
    console.log('click');

    if (colorPickerButton.hasAttribute("checked")) {
        colorPickerButton.removeAttribute("checked");
        localStorage.setItem("theme", Theme.LIGHT);
        } else {
        colorPickerButton.setAttribute("checked", true);
        localStorage.setItem("theme", Theme.DARK);
        }

        themeChecker();
};

colorPickerButton.addEventListener('click', colorChanger);




