let fs = require("fs")

console.log()
console.log("Trying to Open")

let input = process.argv.slice(2);

let i;
for(i=0; i<input.length; i++){
    let command = input[i]
    inputFunc1(command,i);
}

function inputFunc1(command,i){
    switch (command){
        case "-s":
            let nextPath = findNextPath(i)
            let data = fs.readFileSync(nextPath);
            let trimData = data.trim();
            console.log(trimData);
            break;
        default:
            console.log("hiee")
    }
}

// function inputFunc(command , idx){

//     // for path
//     let path = command
//     if(doesExist(path)==true){
//         let data = fs.readFileSync(path)

//         console.log(""+data)
//         console.log()
//     }
//     else{
//         switch(command){
//             case '-s':
//                 sFunc(idx)
//                 break;
//         }
//     }

//     if (command==undefined){
//         console.log("Please give right path")
//         return;
//     }
    
// }

function sFunc(idx){
    let nextPath = findNextPath(idx)
}


function findNextPath(idx){
    return input[idx+1];
}















function doesExist(path){
    if(fs.existsSync(path)==true){
        return true;
    }
}

function isfile(path){
    if(doesExist(path)==true){
        if(fs.lstatSync(path).isFile() == true){
            return true;
        }
    }
}