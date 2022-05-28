//////////////////////////
//Callback
// function orderTourCb(money, cb) {
//     console.log('We are trying to find some tour. Please wait...')
//     setTimeout(() => {
//         if (money > 500) {
//             cb(null, 'Greece');
//         } else {
//             cb('You are poor', null);
//         }
//     }, 1000);
//
//
// }
//
// orderTourCb(600, (err, data) => {
//     err ? console.log(err) : console.log('You tour to', data)
// })

//////////////////////////
//Promise
// function orderTourPromise(money) {
//     return new Promise((resolve, reject) => {
//             console.log('We are trying to find some tour. Please wait...')
//             setTimeout(() => {
//                 if (money < 500) {
//                     resolve('Greece');
//                 }
//                 reject('You are poor');
//             }, 1000)
//         }
//     )
// }
//
// orderTourPromise(600).then(data => console.log('You tour to', data)).catch(reason => console.log(reason));

// function orderTourPromise() {
//     return new Promise((resolve, reject) => {
//             console.log('We are trying to find some tour. Please wait...')
//             fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => resolve(data.json())).catch(err => reject(err));
//         }
//     )
// }
// orderTourPromise().then(data => console.log(data)).catch(reason => console.log(reason));

//////////////////////////
//Promise.all, Promise.allSettled, Promise.race, async await

const prom1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('prom1')
        }, 3000)
    })
}
const prom2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('prom2')
        }, 1000)
    })
}
const prom3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error - prom3')
        }, 2000)
    })
}

// Promise.all([prom1(), prom2(), prom3()]).then(data => console.log(data)).catch(err => console.log(err));
// Promise.allSettled([prom1(), prom2(), prom3()]).then(data => console.log(data));
// Promise.race([prom3(), prom1(), prom2()]).then(data => console.log(data)).catch(err => console.log('error =', err));

// const asyncTest = async () => {
//     try {
//         const res1 = await prom1();
//         const res2 = await prom2();
//         const res3 = await prom3();
//         console.log(res1, res2, res3)
//     } catch (e) {
//         console.log(e)
//     }
// }
// asyncTest().then();