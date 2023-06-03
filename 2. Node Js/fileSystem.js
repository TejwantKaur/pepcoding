import fs from 'fs'
let buffer = fs.readFileSync("abc.js") // data in binary form, i.e binary data basically called buffer


// console.log("bin data", buffer)
// console.log("----------bufferData----😎----" ) // window + .
// console.log("bin data " + buffer)

// create file
// fs.openSync('abc.txt', 'w');
// fs.writeFileSync ('abc.txt', "hum aaj bht bht khush haii  ");

// fs.appendFileSync('abc.txt', 'Why so happy??')

// directory making 
// fs.mkdirSync('meriDirectory')
fs.writeFileSync('meriDirectory/meriFile.txt', 'mera Content')

let content = fs.readdirSync('meriDirectory')
console.log(content);

for(let i=0; i<content.length; i++){
    let cn = fs.readFileSync('meriDirectory/'+content[i])
    console.log(''+cn)
}

for(let i=0; i<content.length; i++){
    console.log('file ', content[i] , 'is removed')
    fs.unlinkSync('meriDirectory/'+content[i]);
}

fs.rmdirSync('meriDirectory')