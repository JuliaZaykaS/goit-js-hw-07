// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const ulEl = document.querySelector('#categories');

const quantityOfcategory = ulEl.children.length;
console.log(`В списке ${quantityOfcategory} категории`);

const arrayOfLiEl = document.querySelectorAll('.item');

arrayOfLiEl.forEach((elem) => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${elem.lastElementChild.children.length}`);
});
