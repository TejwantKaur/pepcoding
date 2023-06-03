
let fs = require("fs");
let path = require("path");

function organizefn(dirPath){
    console.log('Organize Command implemented for ', dirPath)

    // 1. input --> directoryPath given
    let destPath;
    if(dirPath == undefined){
        // console.log('Kindly enter path')
        destPath = process.cwd();
        return;
    } else{
        let doesExist = fs.existsSync(dirPath);

        if(doesExist){
            // 2. create --> organized_files --> directory

            destPath = path.join(dirPath, "OrganizedFiles");
            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath)
            }
            
        } else{
            console.log('Kindly enter path')
            return;
        }
    }
    organizeHelper(dirPath, destPath) 
    //source --> destination
    
}

function organizeHelper(src, dest){
    // 3. identify Category of all files present in input directory -->
    let childNames = fs.readdirSync(src);
    console.log(childNames)

    for(let i=0; i<childNames.length; i++){
        let childAddress = path.join(src,childNames[i]) 
        let isFile = fs.lstatSync(childAddress).isFile();

        if(isFile){
            // console.log(childNames[i]) // only files, no directory
            let category = getCategory(childNames[i])
            console.log(childNames[i] , ' belongs to category --> ',category);

            // 4. copy/cut files in Category Folder
            sendFiles(childAddress, dest, category);
        }
    }
}

function sendFiles(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category)
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath)
    }

    let fileName = path.basename(srcFilePath);
    let destFilePath  = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath)
    console.log(fileName, 'copied to ', category)
    
}

function getCategory(name){
    let ext = path.extname(name)
    // console.log(ext) to remove . use slice
    ext = ext.slice(1)
    ext = ext.toLowerCase()

    for(let type in types){
        let cTypeArray = types[type]; // [] = types[media] = {--}
        for(let i=0; i<cTypeArray.length; i++){
            if(ext == cTypeArray[i]){
                return type;
            }
        }
    }
    return "others"
}

module.exports = {
    organizeKey:organizefn
}