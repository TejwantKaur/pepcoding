import xlsx from 'xlsx'
import data from './eg.json' assert { type: 'json' };

// ````````````````````WRITE````````````````````
//  new worksheet
//  let newWb = xlsx.utils.book_new()

//  json data--> excel format convert
//  let newWs = xlsx.utils.json_to_sheet(data)

//  newWb, worksheet, sheetname
//  xlsx.utils.book_append_sheet(newWb,newWs,"sheet-1")

//  filePath
//  xlsx.writeFile(newWb,'abc.xlsx')


// ````````````````````READ````````````````````
// workBook get
// let wb= xlsx.readFile('abc.xlsx')

// sheet
// let excelData = wb.Sheets["sheet-1"]

// sheet data get
// let ans=xlsx.utils.sheet_to_json(excelData)
// console.log(ans)


function excelWriter (filePath, data, sheetName){
    let newWb = xlsx.utils.book_new()
    let newWs = xlsx.utils.json_to_sheet(data)
    xlsx.utils.book_append_sheet(newWb, newWs, sheetName)
    xlsx.writeFile(newWb, filePath)
}

function excelReader (filePath, sheetName){
    if( fs.existsSync(filePath)==false){
        return[]
    }
    let wb=xlsx.readFile(filePath)
    let excelData=wb.Sheets[sheetName]
    let ans= xlsx.utils.sheet_to_json(excelData)
    return ans;
}

