import fs from 'fs'

console.log('Before')

let promise = fs.promises.readFile('./Intro/abc.txt')
console.log(promise)

// fullfilled
promise.then(function (data){
    console.log('' + data)
})

// rejected
promise.catch(function(err){
    console.log(err)
})

console.log('after')