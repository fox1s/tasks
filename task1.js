// 4. Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c',
// реализуйте ее так, что бы она вернула строку '1*b*1c'
// function getStr() {
//     let arr = [];
//
//     for (let i = 1; i < arguments.length; i++) {
//         arr.push(arguments[i])
//     }
//     return arr.join(arguments[0])
// }
//
// console.log(getStr('*', '1', 'b', '1c'))


// кращий варік
// // 4. Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c',
// //     реализуйте ее так, что бы она вернула строку '1*b*1c'
//
// const xxx = (...args) => {
//     return args.join(args[0]).slice(2)
// }
// console.log(xxx('*', '1', 'b', '1c'));


/////////////////////////////////////////////////////////////////
// 5. Дане дерево, потрібно знайти суму всіх вершин.

// рекурсія

// let sum = 0;
//
// function getSum(obj) {
//
//     sum += obj.valueNode;
//
//     if (obj.next !== null) {
//         for (let i = 0; i < obj.next.length; i++) {
//             getSum(obj.next[i])
//         }
//     }
//
//     return sum
// }
//
// let tree1 = {
//     valueNode: 1,
//     next: [
//         {
//             valueNode: 3,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: null
//         }
//     ]
// }
//
// let tree = {
//     valueNode: 3,
//     next: [{
//         valueNode: 1,
//         next: null
//     },
//         {
//             valueNode: 3,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: [
//                 {
//                     valueNode: 1,
//                     next: null
//                 },
//                 {
//                     valueNode: 5,
//                     next: null
//                 }
//             ]
//         }]
// };
//
// console.log(getSum(tree));

//черга

// function getSum(obj) {
//     let arr = [obj],
//         sum = 0,
//         current;
//
//     while (arr.length > 0) {
//         current = arr.shift()
//         sum += current.valueNode;
//
//         if (current.next !== null) {
//             for (let i = 0; i < current.next.length; i++) {
//                 const elem = current.next[i];
//                 arr.push(elem)
//             }
//         }
//
//     }
//     return sum;
// }
//
// let tree = {
//     valueNode: 3,
//     next: [{
//         valueNode: 1,
//         next: null
//     },
//         {
//             valueNode: 3,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: [
//                 {
//                     valueNode: 1,
//                     next: null
//                 },
//                 {
//                     valueNode: 5,
//                     next: null
//                 }
//             ]
//         }]
// };
//
// console.log(getSum(tree))
///////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 58, [[66, 7, 8], -1, [4, 6], [[59, [125, 456]], 8]], 9];

// let newArr = [];
//
// function myFlat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const elem = arr[i];
//
//         if (typeof elem !== 'number') {
//             myFlat(elem)
//         } else {
//             newArr.push(elem)
//         }
//     }
//     return newArr
// }
//
// console.log(myFlat(arr));

// console.log(arr.flat(3));

//////////////////////////////////////////////////////////////////////////
// FizzBuzz
//
// Это очень популярная задача на собеседованиях.
// Формулировка задачи
//
// Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:
//
//     выводит fizz вместо чисел, кратных 3;
//     выводит buzz вместо чисел, кратных 5;
//     выводит fizzbuzz вместо чисел, кратных и 3, и 5.
//
// Пример:
//
// fizzBuzz(5)
// Результат:
// // 1
// // 2
// // fizz
// // 4
// buzz
// const FizzBuzz = (n) => {
//
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0) {
//             console.log('fizz')
//         } else if (i % 5 === 0) {
//             console.log('buzz')
//         } else if (i % 5 === 0 && i % 3 === 0) {
//             console.log('fizzbuzz')
//         } else {
//             console.log(i)
//         }
//
//     }
//
// }
//
// FizzBuzz(10)
//////////////////////////////////////////////////////////////////////////
// Анаграмма
//
// Слова являются анаграммами другого слова, если имеют одинаковые буквы в одинаковом количестве, но в разном порядке.
// Формулировка задачи
//
// Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения).
// Важны только символы, пробелы или знаки препинания не учитываются.
// Пример:
//
// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false


// const iteration = (str) => {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let elem = str[i];
//         if (elem !== ' ' && elem !== ',') {
//             if (!!obj[elem]) {
//                 obj[elem] += 1;
//             } else {
//                 obj[elem] = 1;
//             }
//         }
//     }
//     return obj
// }
//
// const anagram = (first, second) => {
//     first = first.toLowerCase();
//     second = second.toLowerCase();
//     if (first.length === second.length) {
//         let firstObj = iteration(first);
//         let secondObj = iteration(second);
//
//         if (Object.keys(firstObj).length === Object.keys(secondObj).length) {
//             for (const firstElem in firstObj) {
//                 if (firstObj[firstElem] !== secondObj[firstElem]) return false
//             }
//         }
//
//         return true
//     }
//     return false
// }
// console.log(anagram('finder', 'Friend'));

//////////////////////////////////////////////////////////////////////////
// Найти гласные
//
// Вероятно, это одна из менее сложных задач, но это не уменьшает шанс того, что вы столкнётесь с ней во время собеседования.
// Формулировка задачи
//
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных,
// содержащихся в этой строке. Гласными являются «a», «e», «i», «o», «u».
//
// Примеры:
//
// findVowels('hello') // --> 2
// findVowels('why') // --> 0

// const numberOfVowels = (str) => {
//     const arr = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (arr.includes(str[i])) {
//             count++
//         }
//     }
//     return count
// }
//
//
// console.log(numberOfVowels('helaul'))

//////////////////////////////////////////////////////////////////////////

// Фибоначчи
//
// Последовательность Фибоначчи — это порядок чисел, где каждое последующее число является суммой двух предыдущих.
// Например, первые десять чисел последовательности выглядят так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// Формулировка задачи
//
// Напишите функцию, которая возвращает n-ую запись в последовательности, где n — это число, которое вы передаёте в
// качестве аргумента функции.
//
// Пример:
//
// fibonacci(3)  // --> 2
// 0 1 1 2 3

// рекурсія
// const fibonacci = (number) => {
//     if (number < 2) {
//         return number
//     }
//     return fibonacci(number - 2) + fibonacci(number - 1)
// }
//
// console.log(fibonacci(4))

// цикл
// const fibonacci = (number) => {
//     let arr = [0, 1];
//
//     for (let i = 2; i <= number; i++) {
//         let prevElem = arr[i - 2];
//         let currentElem = arr[i - 1];
//         arr.push(prevElem + currentElem);
//     }
//     return arr[number]
// }
//
// console.log(fibonacci(4))

// ========================================================================
// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.

// Number.prototype.plus = function (x) {
//     return x + this
// }
//
// Number.prototype.minus = function (x) {
//     return this - x
// }
//
// console.log((2).plus(3).minus(1))
// ========================================================================

// 12. Есть массив в котором лежат объекты с датами, отсортировать по датам.

// let arr = [{date: '10.01.2015'}, {date: '05.11.2016'}, {date: '12.11.2002'}];
//
// const sortDate = (arr) => {
//     let result = arr.map(date => {
//         return new Date(date.date.replace(/\./g, '/'));
//     })
//     return result.sort((a, b) => a - b)
// }
// console.log(sortDate(arr));
// ===============================================================================
// 13. Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')
//
// Ответ

// let arr = ['kot', 'tok', 'okt'],
//     arr1 = ['kot', 'tok', 'ott'];
//
// const sameWords = (arr) => {
//     let newArr = [];
//     for (const arrElement of arr) {
//         newArr.push(arrElement.split('').sort().join(''))
//     }
//     return newArr.every(value => value===newArr[0])
// }
// console.log(sameWords(arr))

