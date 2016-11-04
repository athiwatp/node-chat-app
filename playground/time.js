const moment = require('moment');

var date = moment('2016-09-04 09:35:26');
console.log(date.format('Do MMM, YYYY'));
console.log(date.format('h:mm a'));

var newDate = moment('2013-02-08 09:30:26');
console.log(newDate.format('Do MMM, YYYY'));
console.log(newDate.format('h:mm a'));

var currentTime = moment();
console.log(currentTime.format('h:mm a'));
