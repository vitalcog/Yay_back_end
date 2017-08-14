const moment = require('moment');

const chalk = require('chalk');


//    let's DO THIS!!!    //
console.log(chalk.black(chalk.bgYellow('Hello Universe' )));

console.log(chalk.bgRed(chalk.white('it is ')) + chalk.bgMagenta(chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))));
console.log(chalk.inverse(chalk.white(('it is the ') + moment().format('DDD') + ('th day of the year'))));

// console.log(chalk.white(('it is ') + ((parseInt((moment().format('H') * 3600))) + (parseInt((moment().format('m')) * 60)))) + (parseInt(moment().format('ss')))) + (' seconds into the day!')));

console.log(
  chalk.white( ('it is ') + chalk.cyan(
  ((parseInt(moment().format('H')) * 3600) + (parseInt(moment().format('mm')) * 60) + (parseInt(moment().format('ss'))))) + (' seconds into the day!!!'))
);


if (moment().isDST() === true) {
  console.log(chalk.white(('it ') + chalk.magenta('IS ') + ('daylight savings time!')));
} else {
  console.log(chalk.white(('it ') + chalk.magenta('IS NOT ') + ('daylight savings time!')));
}

if (moment().isLeapYear() === true) {
  console.log(chalk.white(('it ') + chalk.green('IS ') + ('a leap year!')));
} else {
  console.log(chalk.white(('it ') + chalk.green('IS NOT ') + ('a leap year!')));
}
