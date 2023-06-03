import req from 'request'
import ch from 'cheerio'

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard"

req(url,cb)

function cb(err, response, html){
    if(err){
        console.log(err)
    }else{
        extract(html)
    }
}

function extract(html){
    let $ = ch.load(html)
    let inningsArr = $('.ds-rounded-lg.ds-mt-2')   // console.log(inningsArr.length) -->2

    for(let i=0; i<inningsArr.length; i++){

        // teamsName
        let teamNameElem = $(inningsArr[i]).find('.ds-text-title-xs.ds-capitalize')
        let teamName = $(teamNameElem).text()
        
        // console.log('teamName: ', teamName)
        //--> teamName:  Kings XI Punjab
        //--> teamName:  Chennai Super Kings

        let BattingtableNameElem = $(inningsArr[i]).find('.ci-scorecard-table') 
        // console.log(BattingtableNameElem.length) //-->1
        let allBattersArrElem = $(BattingtableNameElem).find('tr')

        for(let j=0; j<allBattersArrElem.length; j++){ 
            let allColsPlElem = $(allBattersArrElem[j]).find('td')
            let isBatsManCol = $(allColsPlElem[0]).hasClass('ds-w-0')

            // console.log(isBatsManCol)
            if(isBatsManCol==true){
                let playerName = $(allColsPlElem[0]).text()  
                // console.log(`teamName:--> ${teamName}, playerName:--> ${playerName}`)
                let href = $(allColsPlElem[0]).find('a').attr('href')
                let fullLink = 'https://www.espncricinfo.com'+href
                console.log(fullLink)
                getBirthdayPage(fullLink, playerName, teamName)
            } 
        }
    }
}

function getBirthdayPage(url,name,tName){
    req(url,cb)

    function cb(err, response,html){
        if(err){
            console.log(err)
        }else{
            extractBirthdayDate(html,name,tName)
        }
    }
}

function extractBirthdayDate(html,name,tName){
    let $ = ch.load(html)
    let playerDetailsArr = $('.ds-gap-4 .ds-text-title-s.ds-text-typo')
    let birthday = $(playerDetailsArr[1]).text();
    console.log(`PlayerName:--> ${name} plays for:--> ${tName} was born on:--> ${birthday}`)
}