import req from 'request'
import ch from 'cheerio'
import ps from './scrCard.js'

function getAllMatchesLink(fullLink){
    req (fullLink, function(err,response, html){
        if(err){
            console.log(err)
        }else{
            // console.log('else')
            extractALlMatchesLink(html)
        }
    });
}

function extractALlMatchesLink(html){   //scoreCard for all matches
    let $ = ch.load(html)
    // console.log($.length)
    
    let scoreCardElems = $('a[href*="full-scorecard"]')

    for(let i=0; i<scoreCardElems.length; i++){
        let link = $(scoreCardElems[i]).attr('href')
        let fullLink = "https://www.espncricinfo.com"+link
        console.log(fullLink)
        ps.processScoreCard(fullLink)
    }
}

// ./allMatch.js
// const matches = { getAllMatchesLink };
// export default matches;

const matches = { getAllMatchesLink };
export default matches;

// export const matches = ;
// module.exports = {
//     matches: getAllMatchesLink
// }