let fs = require("fs");
let path = require("path");

function treefn(dirPath){
    // console.log('Tree Command implemented for ', dirPath)
    if(dirPath == undefined){
        dirPath = process.cwd(); //current working directory
        // console.log("kindly Enter Path")
        treeHelper(dirPath, "")
        return;
    } else{
        let doesExist = fs.existsSync(dirPath)
        if(doesExist){
            treeHelper(dirPath,"");
        } else{
            console.log("Kindly Enter correct path")
            return;
        }
    }
}

function treeHelper(dirPath,indent){
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent, + "|--" + fileName);
    } else{
        let dirName = path.basename(dirPath)
        console.log(indent + "|__" + dirName)

        let childrens = fs.readdirSync(dirPath)
        for(let i=0; i<childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent +"\t")
        }
    }

}


module.exports = {
    treeKey:treefn
}