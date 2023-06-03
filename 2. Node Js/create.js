let fs = require('fs');

// for(let i=1; i<=10; i++){
//     let dirPath = `Lecture - ${i}`;
//     fs.mkdirSync(dirPath);
//     fs.writeFileSync(path.join(dirPath + 'readme.md'), `# readme for ${dirPath}`);
// }


// for(let i=1; i<=10; i++){
//     let dirPath = `Lecture - ${i}`;
//     fs.rmdirSync(dirPath);
//     // fs.writeFileSync(path.join(dirPath + 'readme.md'), `# readme for ${dirPath}`);
// }

let path = require('path');
// extension
let extension = path.extname(path.join(__dirname,'abc.js'));
console.log('ext', extension);

let name = path.basename(__dirname)
console.log(name)

name = path.basename(path.join)
