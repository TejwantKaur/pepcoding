const request = require ('request')
const cheerio = require('cheerio')
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

console.log('Before')
request (url, cb)

function cb(error, response, html){
    if(error){
        console.log(error)
    }else{
        // console.log(html)
        extractHtml(html)
    }
}

function extractHtml(html){
    let $ = cheerio.load(html)
    let elementArr = $(".ci-html-content")
    let text = $(elementArr[10]).text()
    let htmldata = $(elementArr[10]).html()

    console.log('--------------textdata--------------')
    console.log('text Data',text)
    console.log('--------------htmldata--------------')
    console.log('html data',htmldata)
    console.log()
}
console.log('After')