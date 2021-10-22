// //map
// Array.prototype.customMap = function (mapCallback) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
//         return []
//     } else {
//         let result = []
//
//         for (let i = 0, len = arr.length; i < len; i++) {
//             result.push(mapCallback(arr[i], i, arr))
//         }
//         return result
//     }
// }
//
//
// let arr = [4, 9, 8, 95, 4, 5];
//
//
// let newArray = arr.customMap((value, index, array) => (value > 7 ? 'value>7' : value) )
// console.log(newArray)

/////////////////////////////////////////////////////////////////
// // filter
//
// // eslint-disable-next-line no-extend-native
// Array.prototype.customFilter = function (filterCallback) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
//         return [];
//     }
//
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (filterCallback(arr[i], i, arr)){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr = [4, 9, 8, 95, 4, 5];
// let newArr = arr.customFilter((value, index, array) => value <= 5);
// console.log(newArr)
/////////////////////////////////////////////////////////////

// // reduce
// Array.prototype.customReduce = function (reduceCallback, initialValue) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
//         return [];
//     } else {
//         let hasInitialValue = initialValue !== undefined;
//         let prevValue = hasInitialValue ? initialValue : arr[0];
//
//         for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
//             prevValue = reduceCallback(prevValue, arr[i], i, arr)
//         }
//         return prevValue;
//     }
// };
//
// let arr = [1, 1, 2, 3, 1, 2];
// let newArr = arr.customReduce((prevValue, currentValue, index, array) => {
//     return prevValue + currentValue
// }, 0);
// console.log(newArr)
/////////////////////////////////////////////////////////////

// // sort
// Array.prototype.customSort = function (sortCallback) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof sortCallback !== 'function') {
//         console.error('TypeError: element is not an array or length = 0');
//         return null
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (typeof arr[j + 1] === 'number') {
//                 if (sortCallback(arr[j], arr[j + 1]) < 0) {
//                     let first = arr[j];
//                     let second = arr[j + 1];
//                     arr[j + 1] = first;
//                     arr[j] = second;
//
//                 }
//             }
//
//         }
//
//     }
//     return arr
//
// };
//
// let arr = [1, 5, 2, 3, 7, 0];
// arr.customSort((a, b) => (b - a));
// console.log(arr)
/////////////////////////////////////////////////////////////

// // some
// Array.prototype.customSome = function (someCallback) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof someCallback !== 'function') {
//         console.error('TypeError: element is not an array or length = 0');
//         return null
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if (someCallback(arr[i], i, arr)) {
//             return true
//         }
//     }
//     return false
// };
//
// let arr = [0, 0, -1, -8, 0, 0];
// let answer = arr.customSome((value, index, array) => (value > 0));
// console.log(arr, "=>", answer)
/////////////////////////////////////////////////////////////

// // every
// Array.prototype.customEvery = function (someCallback) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof someCallback !== 'function') {
//         console.error('TypeError: element is not an array or length = 0');
//         return null
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!someCallback(arr[i], i, arr)) {
//             return false
//         }
//     }
//     return true
//
// };
//
// let arr = [1, 5, 2, 3, 7, 1];
// let answer = arr.customEvery((value, index, array) => (value > 0));
// console.log(arr, "=>", answer)
/////////////////////////////////////////////////////////////

// // forEach
// Array.prototype.customForEach = function (forEachCallback) {
//     let arr = this;
//
//     if (!Array.isArray(arr) || !arr.length || typeof forEachCallback !== 'function') {
//         console.error('TypeError: element is not an array or length = 0');
//     }
//     for (let i = 0; i < arr.length; i++) {
//         forEachCallback(arr[i], i, arr);
//     }
//
// };
//
// let arr = [1, 5, 2, 3, 7, 1];
// arr.customForEach((value, index, array) => {
//     if (value>3){
//      return
//     }
//     console.log(value)
// });
/////////////////////////////////////////////////////////////

// // forEach
// Array.prototype.customFlat = function () {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length) {
//         console.error('TypeError: element is not an array or length = 0');
//         return [];
//     }
//
//     let result = [];
//     return (function recursion(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i]) && arr.length) {
//                 recursion(arr[i])
//             } else {
//                 result.push(arr[i])
//             }
//         }
//         return result
//     })(arr)
//
// };
//
// let arr = [1, [[2, [3, 4, [5, 6, [7, [8, 9, 10, 11], 12, 13], 14], 15], 16, [17, [18, 19, 20, 21], 22, 23], 24], 25, 26]];
// let newArr = arr.customFlat();
// console.log(arr, '=> ', newArr);

/////////////////////////////////////////////////////////////

// // find
// Array.prototype.customFind = function (findCallback) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof findCallback !== 'function') {
//         console.error('TypeError: element is not an array or length = 0');
//         return null;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let result = findCallback(arr[i], i, arr);
//         if (result) {
//             return arr[i]
//         }
//     }
//     return undefined
// };
//
// let arr = ['wge', 'rthtrn', 'gergreg', 'ergreg', 'gwgeage', 'jeh'];
// let answer = arr.customFind((value, index, array) => (value.startsWith('r')));
// console.log(arr, "=>", answer)

/////////////////////////////////////////////////////////////

// // findIndex
// Array.prototype.customFind = function (findCallback) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length || typeof findCallback !== 'function') {
//         console.error('TypeError: element is not an array or length = 0');
//         return null;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let result = findCallback(arr[i], i, arr);
//         if (result) {
//             return i
//         }
//     }
//     return -1
// };
//
// let arr = ['wge', 'rthtrn', 'gergreg', 'ergreg', 'gwgeage', 'jeh'];
// let answer = arr.customFind((value, index, array) => (value.startsWith('w')));
// console.log(answer, arr)
/////////////////////////////////////////////////////////////

// // max
// Array.prototype.customMax = function () {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length) {
//         console.error('TypeError: element is not an array or length = 0');
//         return null
//     }
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         max = max < arr[i] ? arr[i] : max
//     }
//     return max
// };
//
// let arr = [1, 10, 2, 3, 7, 1];
// let answer = arr.customMax();
// console.log(answer)
/////////////////////////////////////////////////////////////

// // splice
// Array.prototype.customSplice = function (start, deleteCount) {
//     let arr = this;
//     if (!Array.isArray(arr) || !arr.length) {
//         console.error('TypeError: element is not an array or length = 0');
//         return null
//     }
//     let final = start + deleteCount;
//     if (start < 0) {
//         start = arr.length + start;
//         final = start + deleteCount;
//     }
//
//
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i >= start && i < final) {
//             result.push(arr[i])
//         }
//     }
//     return result
// };
//
// let arr = [1, 10, 2, 3, 7, 1];
// let answer = arr.customSplice(-2, 8);
// console.log(answer);



//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// let arr = [17,5,0, 18,9,10]
//
// const sort = (arr) => {
//     return new Promise((resolve, reject) => {
//         if (!Array.isArray(arr)){
//             reject('not array!!!')
//             return
//         }
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[j] > arr[j+1]) {
//                     let first = arr[j]
//                     let second = arr[j+1]
//                     arr[j] = second
//                     arr[j+1] = first
//                 }
//
//             }
//         }
//         resolve(arr)
//     })
//
// }
//
// sort(arr)
//     .then(result => console.log(result))
//     .catch(reason => console.log(reason))
