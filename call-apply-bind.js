const user1 = {
    payment:0
}

const user2 = {
    payment:0
}

function changePayment(newPayment){
    this.payment += newPayment;
}

changePayment.apply(user1, [3000])
console.log(user1, user2);
changePayment.call(user2, 2000)
console.log(user1, user2);
let changePaymentBinded = changePayment.bind(user2, 8000)
changePaymentBinded()
console.log(user1, user2);
