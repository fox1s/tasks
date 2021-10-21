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
//
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