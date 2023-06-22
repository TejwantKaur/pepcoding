import req from 'request'
import ch from 'cheerio'

import fs from 'fs'
import path from 'path'
import PDFDocument from 'pdfkit'

import { fileURLToPath } from 'url'
const currModuleUrl = import.meta.url
const currModulePath = fileURLToPath(currModuleUrl)



function getIssuesHTml(url,topicName,repoName){
    req (url,cb)

    function cb(err, response, html){
        if(err){
            console.log(err)
        }else{
            getIssue(html)
            // console.log(html)
        }
    }

    function getIssue(html){
        let $ = ch.load(html)
        let issuesArrElem = $('.d-block.d-md-none.position-absolute.top-0.bottom-0.left-0.right-0')
        console.log(issuesArrElem.length)

        let arr = []
        for(let i=0; i<issuesArrElem.length; i++){
            let link = $(issuesArrElem[i]).attr('href')
            // console.log(link)
            arr.push(link)
        }
        console.log(topicName,"  ",arr)

        let folderPath = path.join(path.dirname(currModulePath),topicName)
        dirCreater(folderPath)

        // let filePath = path.join(folderPath, repoName + ".json")
        let filePath = path.join(folderPath, repoName + ".pdf")

        let text = JSON.stringify(arr)
        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream(filePath))
        pdfDoc.text(text)
        pdfDoc.end()
        // fs.writeFileSync(filePath, );

    }
}

export default {getIssuesHTml}


function dirCreater(folderPath){
    if(fs.existsSync(folderPath)==false){
        fs.mkdirSync(folderPath)
    }
}

