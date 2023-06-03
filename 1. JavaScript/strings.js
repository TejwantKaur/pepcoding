let singleQuotes = ' Hows are your day ';
let doubleQuotes = 'How double r u ';

console.log (singleQuotes);
console.log(doubleQuotes);

let char = singleQuotes.charAt(4);
let ascii = singleQuotes.charCodeAt(4);
let substr = doubleQuotes.substring(2,8);

console.log(char);
console.log(ascii);
console.log(substr);

let arrStr = singleQuotes.split("o");
console.log(arrStr);


let trim = singleQuotes.trim();
console.log(trim);
let strS = trim.split(" ")
console.log(strS);
console.log(strS.join('$'));

let join = strS.join('$');
console.log(join);
console.log(singleQuotes.split(""))


let db = doubleQuotes.split(" ");
console.log(db.join('+'));

