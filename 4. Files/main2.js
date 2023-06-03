#!/usr/bin/env node

let organizeObj = require("./commands/organize")


let command = inputArr[0];


switch (command){
    case 'organize':
        organizeObj.organizeKey(inputArr[1]);
        break;
    default:
        console.log('Please Input Right Command!')  
    break;
}