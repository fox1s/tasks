// Знайти найбільший існуючий поліндром який може утворитися завдяки добутку двох простих пятизначних чисел.

// let res = 0;
// for (let i = 99000; i <= 99999; i++) {
//     for (let j = 99000; j <= 99999; j++) {
//         let sum = i * j;
//         sum = sum.toString()
//         let middle = Math.floor(sum.length / 2);
//         let firstHalf = sum.slice(0, middle)
//         let secondHalf = sum.slice(sum.length - middle, sum.length).split("").reverse().join("")
//         if (firstHalf === secondHalf) {
//            if(res < +sum) {
//                    res = +sum
//            }
//         }
//     }
// }
// console.log(res)
// // res = 9966006699

// =====================================================================================

// =====================================================================================
// отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов

// let arr = [4, 1, 3, 10, 86, 0, 1, 4, 5, 6, 9, 2, 5];
//
// function sort(arr) {
//     let newArr = [];
//     let newArr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         setTimeout(() => {
//             newArr[newArr.length] = arr[i];
//         }, arr[i])
//     }
//     console.log(newArr)
// }
//
// sort(arr)
// =====================================================================================

// =====================================================================================
// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
//
// Доп 1

// function numberToText(number) {
//     let elem;
//     let arr = [];
//     let strNumb = number.toString()
//     let j = strNumb.length - 1;
//     for (let i = 0; i < strNumb.length; i++) {
//         elem = strNumb[i] * Math.pow(10, j)
//         arr.push(elem)
//         j--;
//     }
//
//    let res = arr.join(' + ');
//     console.log(res)
// }
//
// numberToText(3275)
// _______________________________________________________________________________________________



// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// Доп 2

// let arr = [1,6,9,0,17,88,4,7];
// let i = 0;
// let newArr = arr.reduce((previousValue, currentValue) => {
//     if (currentValue > previousValue) {
//         return currentValue
//     }
//     return previousValue
// },0)
// console.log(newArr);
// _______________________________________________________________________________________________



// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в
// этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
//
// Доп 3

// function NumberOf1 (str) {
//     let newStr = str.slice(0,str.indexOf('00')) + '00'
//     let j = 0;
//     for (let i = 0; i < str.length; i++) {
//         const elem = str[i];
//         if (elem === '1') {
//             j++
//         }
//     }
//     console.log(`Number of '1' = ${j}`)
// }
// NumberOf1('217649194758610011')
// _______________________________________________________________________________________________
// =====================================================================================

// =====================================================================================