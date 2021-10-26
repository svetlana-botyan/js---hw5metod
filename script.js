
function createElement(tagName = 'div', content = '') {
    const element = document.createElement(tagName);
    element.innerHTML = content;

    return element;
}

// task 1

let arr = [87, 4.82, 3, 6, 12, -2, 9, 114]; // произвольный список чисел для li

const createItemsElement = function (array, receiver, tagName = 'li') {
    for (let item of array) {
        content = String(item);
        const element = createElement(tagName, content);
        receiver.append(element);
    }
}

createItemsElement(arr, document.body, 'li') // создание списка li в body

const ulElement = createElement('ul');
document.body.append(ulElement);

const evenArray = [];
const listItemsElement = document.querySelectorAll('li')

for (let listItemElement of listItemsElement) {
    let number = listItemElement.textContent;
    if (number % 2 == 0) {
        evenArray.push(number)
    }
}

// createItemsElement(evenArray, ulElement, 'li')   можно воспользоваться имющейся ф-цией   or:

evenArray.forEach((item) => {
    content = String(item);
    const element = createElement('li', content);
    ulElement.append(element);
})


//task 2 

const formElement = createElement('form');
formElement.setAttribute('action', '#');
formElement.setAttribute('metod', 'POST');
document.body.append(formElement);

const labelElement = createElement('label', 'Введите ваше имя');
formElement.append(labelElement);

const inputElement = createElement('input');
inputElement.setAttribute('type', 'text');
labelElement.append(inputElement);



function createSelectElement(options = []) {
    const selectElement = createElement('select')

    for (let option of options) {
        const optionElement = createElement('option', String(option.name))
        optionElement.setAttribute('value', String(option.value))

        selectElement.append(optionElement)
    }

    return selectElement
}

const cities = [
    { name: 'Минск', value: 'Minsk' },
    { name: 'Лондон', value: 'London' },
    { name: 'Париж', value: 'Paris' },
]

const selectElement = createSelectElement(cities);
formElement.append(selectElement);

const buttonlElement = createElement('button', 'Согласен');
formElement.append(buttonlElement);


const ul2Element = createElement('ul');
formElement.after(ul2Element);

const arrayCountries = ['Беларусь', 'Бразилия', 'Индия', 'Италия',
    'Литва', 'Япония', 'Сомали', 'Франция']


for (let i = 0; i < arrayCountries.length; i++) {
    let result = setInterval(() => {
        const liElement = createElement('li', arrayCountries[i])
        ul2Element.append(liElement);
    }, 1000)
      i++  ;    
}



// task 3
// 1 - 15. Сортировка массива по убыванию
const array1 = numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

array1.sort((a, b) => b - a); //каждый следующий меньше по отношению к предыдущему

console.log(array1);


// 2 - 8. Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const createSliceArray = (array, n) => array.slice(0, n);

console.log(createSliceArray(array2, 0));
console.log(createSliceArray(array2, 4));
console.log(createSliceArray(array2, -3));


// 3 - 17. Сумма квадратов значений массива
// Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

const array3 = [1, 2, 3, 4, 5]

const sumOfSquares = array3.reduce(function (previousValue, item) {

    return previousValue + item * item;
}
);

console.log(sumOfSquares);


//  4 - 18. Сумма и произведение значений массива
//  Напишите код, который определяет сумму и произведение значений массива. 

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum4 = array4.reduce((previousValue, item) => previousValue + item);

let multiply4 = array4.reduce((previousValue, item) => {

    return previousValue * item
}
);

console.log('сумма: ' + sum4 + ', произведение: ' + multiply4);

// 5 - 19. Удаление ложных значений из массива
// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).

const array5 = [NaN, 0, 77, false, -17, '', undefined, 99, null];

const result5 = array5.filter((item) => !!item);

console.log(result5)

