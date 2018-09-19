const moment = require('moment');
// // Jan 1st 1970 00:00:00 am
// // JS stores timestamps as milliseconds
// // 1000 = 1s, -1000 = -1s


// let date = new Date();
// console.log(date.getMonth());

// let date = moment();
// date.add(1, 'year').subtract(9, "months");
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
new Date().getTime();
let someTimestamp = moment().valueOf();
console.log(someTimestamp)

let createdAt = 1234
let date = moment(createdAt);
console.log(date.format('h:mm A'))