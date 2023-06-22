import req from 'request'
import ch from 'cheerio'
import issue from './issue.js'

function getRepoPathHtml(url,topicName){
    req (url,cb)

    function cb(err, response, html){
        if(err){
            console.log(err)
        }else{
            getRepoLinks(html)
        }
    }

    function getRepoLinks(html){
        let $ = ch.load(html)
        let headingArr = $('.text-normal')
        
        console.log(topicName)
        for(let i=0; i<8; i++){
            let twoAnchorsArr = $(headingArr[i]).find('a')
            let link = $(twoAnchorsArr[1]).attr('href')
           
            // console.log(link)
            let fullLink = `https://github.com${link}/issues`
            // console.log(fullLink)
            let repoName = link.split('/').pop()

            issue.getIssuesHTml(fullLink,topicName,repoName)
        }
        console.log('```````````````````````')
    }

}

// const path =  
export default {getRepoPathHtml}