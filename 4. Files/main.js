#!/usr/bin/env node

// to put on comman line --> shebang syntax for node js

// https://github.com/crimemaster007/File-System-Organizer/blob/main/utility.js

let inputArr = process.argv.slice(2);
// import fs from "fs";

let helpObj = require("./commands/organize")
let treeObj = require("./commands/tree")
let organizeObj = require("./commands/organize")

// console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath" 
// node main.js help

let command = inputArr[0];


// module.exports = types;

switch (command){
    case 'tree':
        treeObj.treeKey(inputArr[1]);
        break;
    
    case 'organize':
        organizeObj.organizeKey(inputArr[1]);
        break;

    case 'help':
        helpObj.helpKey();
        break;

    default:
        console.log('Please Input Right Command!')  
    break;
}



























