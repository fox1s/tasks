const mock = [
    {
        name: "Andrii",
        age: 27,
        salary: 4300
    },
    {
        name: "Taras",
        age: 23,
        salary: 3400
    },
    {
        name: "Ivan",
        age: 19,
        salary: 1900
    },
    {
        name: "Oleh",
        age: 30,
        salary: 5200
    },
    {
        name: "Ihor",
        age: 36,
        salary: 8600
    }
];
// 1) Need to find the average of the salary
// The function should return a number value

// const salaryAverage = (mock) => {
//     let sum = 0;
//     for (let i = 0; i < mock.length; i++) {
//         const mockElement = mock[i];
//         sum += mockElement.salary;
//     }
//     return sum / mock.length
//
// };
// console.log("salaryAvarage:", salaryAverage(mock));
//
// // 2) Need to check if the age of all the people is > 20
// // The function should return a boolean value
// const isAllOlderThen20 = (mock) => {
//     return mock.every(value => value.age > 20)
// };
// console.log("isAllOlderThen20:", isAllOlderThen20(mock));
//
//
// // 3) Need to find all people whose salary > 5000
// // The function should return an array
// const findRichPeople = (arr) => {
//     return arr.filter(value => value.salary > 5000)
// };
// console.log("findRichPeople:", findRichPeople(mock));
//
// // 4) Need to sort the data by age from the less to the biggest one
// // The function should return an array
// const sortByAge = (arr) => {
//     return arr.sort((a, b) => a.age - b.age)
// };
// console.log("sortByAge:", sortByAge(mock));
// //////////////////////////////////////////////////////////////////////////////////////////

// 7) Implement a function that sums all input parameters
// The function should return a number
// const sumOfAllParams = (...arguments) => {
//     let sum = 0;
//     for (const argument of arguments) {
//         sum += argument
//     }
//     return sum
// };
// console.log("sumOfAllParams: ", sumOfAllParams(1, 2, 3, 4, 5, 6));


// const str = 'This is the test string';
// /*
//   {
// 	t: 4,
// 	h: 2,
// 	i: 3,
// 	s: 4,
// 	...
//   }
// const countChars = (str) => {
//     let sort = {}
//     let newStr = str.toLowerCase()
//     for (let i = 0; i < newStr.length; i++) {
//         const lit = newStr[i];
//         if (lit !== ' ') {
//             !!sort[lit] ? sort[lit] += 1 : sort[lit] = 1
//         }
//     }
//     console.log(sort)
// };
//
// countChars(str)




//////////////////////////////////////////////////////////////////
// const str = 'This is the test string, ';
// /*
//   {
// 	t: 4,
// 	h: 2,
// 	i: 3,
// 	s: 4,
// 	...
//   }

// const countLetterInString = (str) =>
//     str.split('').reduce((previous, current) => {
//         const isLetter = ![' ', ','].includes(current);
//         if (isLetter) {
//             previous[current] = previous[current] && isLetter ? previous[current] + 1 : 1
//         }
//         return previous
//     }, {})
//
//
// console.log(countLetterInString(str));

// const sumOfAllParams = (...args) => {
//     return args.reduce((prev, curr) => prev + curr, 0)
// }
// console.log("sumOfAllParams: ", sumOfAllParams(1, 2, 3, 4, 5, 6));