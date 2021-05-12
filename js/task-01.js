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
console.log(ulEl);
console.dir(ulEl);
const quantityOfcategory = ulEl.children.length;
console.log(`В списке ${quantityOfcategory} категории`);

// const getTitleAndQuantityOf
function getTitle(ulEl) {
    console.log(ulEl.children);
    // const f = [...ulEl.children];
    // console.log(f);

    // console.log(`Категория: ${ulEl.children[0].firstElementChild.textContent }`);
    // console.log(`Количество: ${ulEl.children[0].lastElementChild.children.length}`);
//  ulEl.children.forEach(child => {
//         console.log(child);
//         console.log(`Категория: ${ulEl.child.firstElementChild.textContent }`);
//     console.log(`Количество: ${ulEl.child.lastElementChild.children.length}`);
//         // console.log(child.firstElementChild.textContent);
//         // console.log(f);
//     });

};

getTitle(ulEl);
