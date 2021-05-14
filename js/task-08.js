// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
// 1 параметр amount - число.Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого,
// должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-action="render"]');
const cleanBtnEl = document.querySelector('[data-action="destroy"]');
const divContainerEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);


function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}


function createBoxes(amount) {
    inputEl.addEventListener('input', OnChangeInputValue);

    function OnChangeInputValue() {
    amount = inputEl.value;
    }
    const arrayBoxes = [];

    let size = 30;
    for (let i = 0; i < inputEl.value; i += 1){
            arrayBoxes[i] = document.createElement('div');
            arrayBoxes[i].style.width = `${size}px`;
            arrayBoxes[i].style.height = `${size}px`;
            arrayBoxes[i].style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
            arrayBoxes[i].classList.add('box');
        size += 10;
    };


    return divContainerEl.append(...arrayBoxes);

};


cleanBtnEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
    const divChildEl = document.querySelectorAll('.box');
        divChildEl.forEach((divChild) => {
        divContainerEl.removeChild(divChild);
        })

    inputEl.value = '';

}




