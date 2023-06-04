import req from 'request'
import ch from 'cheerio'
import path from 'path'
import fs from 'fs'
import xlsx from 'xlsx'

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard'

// home pg

function processScoreCard(url){
    req (url, cb)
}

function cb(err, request, html){
    if(err){
        console.log(err)
    }else{
        // console.log('else')
        extractMatchDetails(html)
    }
}

function extractMatchDetails(html){
    let $ = ch.load(html)

    let descNameElem = $('.ds-text-tight-m.ds-text-typo-mid3')
    let result = $('.ds-font-regular.ds-truncate')

    let descNameText = $(descNameElem).text()
    let descNameArr = descNameText.split(',')

    let venue = descNameArr[1].trim()
    let date = descNameArr[2].trim()
        result = result.text().trim()
    console.log(venue ,'|', date, '|',result)

    let inningsTable = $('.ds-rounded-lg.ds-mt-2')
    // console.log(inningsTable.length)

    let str=''
    str += $ (inningsTable[0]).html() 
    // console.log(str)

    for(let i=0; i<inningsTable.length; i++){ //i=2
        // str += $(innings[i]).html()
        let teamName = $(inningsTable[i]).find('.ds-capitalize').text()
        let opponentIndex = i == 0 ? 1 : 0
        let opponentName  = $(inningsTable[opponentIndex]).find('.ds-capitalize').text()

        // console.log(`${venue} | ${date} | ${teamName} | ${opponentName} | ${result}`)

        let cInnings = $(inningsTable[i])
        let allRows = cInnings.find('.ci-scorecard-table tbody tr') 

        // console.log(allRows.length)
        for(let j=0; j<allRows.length; j++){
            let colsInOneRow = $(allRows[j]).find('td')  // 1 row ch cols
            let isWorthy = $(colsInOneRow[0]).hasClass('ds-w-0' && 'ds-flex')

// const targetElement = $(colsInOneRow[0]);
// console.log(targetElement.attr('class'));

// const isWorthy = targetElement.hasClass('ds-w-0 ds-flex');
// console.log(isWorthy);

            // console.log(isWorthy)
            if(isWorthy == true){
                // console.log(colsInOneRow.text())
                let playerName = $(colsInOneRow[0]).text().trim()
                let runs = $(colsInOneRow[2]).text().trim()
                let balls = $(colsInOneRow[3]).text().trim()
                let fours = $(colsInOneRow[5]).text().trim()
                let sixes = $(colsInOneRow[6]).text().trim()
                let sr = $(colsInOneRow[7]).text().trim()

                console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${sr}`)

                processPlayer(teamName, playerName, runs, balls, fours, sixes, sr, opponentName, venue, date, result)
            }
        }
    }
}

import { fileURLToPath } from 'url';
const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
// const teamPath = path.join(path.dirname(currentModulePath), 'ipl', teamName);


function processPlayer(teamName, playerName, runs, balls, fours, sixes, sr, opponentName, venue, date, result){
    
    let teamPath = path.join(path.dirname(currentModulePath), 'ipl', teamName);
    // let teamPath = path.join(__dirname, 'ipl', teamName)
    dirCreater(teamPath)
    let filePath = path.join(teamPath, playerName + '.xlsx')
    let content = excelReader(filePath, playerName)
    let playerObj = {
        teamName, playerName,runs, balls, fours, sixes, sr, opponentName, venue, date, result
    }
    content.push(playerObj)
    excelWriter(filePath,content, playerName)
}

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

function dirCreater(filePath){
    if(fs.existsSync(filePath) == false){
        fs.mkdirSync(filePath)
    }
}




const process = {processScoreCard}
export default process;