import fs from 'fs'
// let buffer = fs.readFileSync('./eg.json')
// console.log(buffer)

console.log("````````````````````````")
// let data = JSON.parse(buffer)
// console.log(data)

// import data from './eg.json'
// let data = require("./eg.json")
import data from './eg.json' assert { type: 'json' };

// console.log(data)

data.push({
    "name": "bheere",
        "lastName": "Roggers",
        "isAvenger": true,
        "friends": [
            "Bruce", "neter", "Natasha"
        ],
        "age": 45,
        "address": {
            "city": "New York",
            "state": "manhatten"
        }
})

let stringData = JSON.stringify(data)
fs.writeFileSync("./eg.json",stringData)