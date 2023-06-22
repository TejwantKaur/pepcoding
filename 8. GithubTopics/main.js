import req from 'request'
import ch from 'cheerio'
import getPath from './repoPg.js'
import pdf from 'pdfkit'

const url = "https://github.com/topics"
req (url, cb)

function cb(err, response, html){
    if(err){
        console.log(err)
    }
    else if(response.statusCode == 404){

        console.log("page not found")
    }
    else{
        getTopicLinks(html)
    }
}

function getTopicLinks(html){
    let $ = ch.load(html)
    let linkElementArr = $('.no-underline.flex-justify-center')
    // console.log(linkElementArr.length)
    
    for(let i=0; i<linkElementArr.length; i++){
        let href = $(linkElementArr[i]).attr("href")
        let topicName = href.split('/').pop()

        // console.log(topicName)
        // let fullLink = "https://github.com"+href
        let fullLink = `https://github.com${href}`
        // console.log(fullLink)
        getPath.getRepoPathHtml(fullLink,topicName)
    }
}