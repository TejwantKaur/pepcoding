import chalk from "chalk";

console.log(chalk.blueBright('Hello world!'));
console.log(chalk.red('Hello'))
console.log(chalk.underline('Hello world!'));
console.log(chalk.green('Hello world!'));
console.log(chalk.bgBlue('Hello world!'));

import figlet from "figlet"

// let figlet = require("figlet")

console.log(figlet.textSync("Hello Coders"))

console.log(chalk.blue(figlet.textSync("HELLO GUYS....")))

console.log(chalk.bgBlue(figlet.textSync("#NodeJs")))