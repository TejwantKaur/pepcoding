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

    let teamArray = $('.ds-mt-0 .ci-team-score')
    // console.log(teamArray.length) //-->2
    let wTeamName;

    for(let i=0; i<teamArray.length; i++){

        let isGreyClass = $(teamArray[i]).hasClass('ds-opacity-50')
        // console.log(isGreyClass) -->true[i=0] -->false[i=1]

        if(isGreyClass==false){
            let teamNameElem = $(teamArray[i]).find('.ds-block')
            wTeamName = teamNameElem.text().trim()
            // console.log('Black Team: ', wTeamName) //-->Black Team:  Chennai Super Kings
        }
    }

    let inningsArr = $('.ds-rounded-lg.ds-mt-2')
    // console.log(inningsArr.length) -->2
    let htmlStr = ''

    for(let i=0; i<inningsArr.length; i++){ //len=2
        let cHtml = $(inningsArr[i]).html();
        htmlStr += cHtml  
    }
    // console.log(htmlStr) //--> innings.html

    for(let i=0; i<inningsArr.length; i++){

        // teamsName
        let teamNameElem = $(inningsArr[i]).find('.ds-text-title-xs.ds-text-typo')
        let teamName = $(teamNameElem).text()
        
        // console.log('teamName at inningsArr[',i,']: ', teamName)
        // -->teamName at inningsArr[0]:  Kings XI Punjab  (20 ovs maximum)
        // -->teamName at inningsArr[1]:  Chennai Super Kings  (T: 154 runs from 20 ovs)

        teamName = teamName.split('(')[0]
        teamName = teamName.trim()
        // console.log('teamName: ', teamName) 
        //--> teamName:  Kings XI Punjab
        //--> teamName:  Chennai Super Kings

        if(wTeamName == teamName){ //-->i=1
            // console.log('winning TeamName: ', teamName) //-->winning TeamName:  Chennai Super Kings

            let tableName = $(inningsArr[i]).find('.ci-scorecard-table')
            // console.log('batting in chk len ', tableName.length) //-->1

            let chkTableElem = $(inningsArr[i]).find('.ds-table')
            // console.log('chk len: ', chkTableElem.length) //-->chk len:  2

            for(let j=0; j<chkTableElem.length; j++){
                let isBatClass = $(chkTableElem[j]).hasClass('ci-scorecard-table')
                // console.log('isBat [',j,']= ',isBatClass ,' ',isBatClass == true ? 'Batting' : 'Bowling' )
                // isBat [ 0 ]=  true   Batting
                // isBat [ 1 ]=  false   Bowling

                if(isBatClass==false){ //-->j=1
    
    
    let bowlingTableElem = $(chkTableElem[j])
    // console.log(bowlingTableElem.length) //-->1

    let allBowlersArrElem = $(bowlingTableElem).find('tr')
    // console.log(allBowlers.length)

    let hwtName = ''
    let hwt = 0
    for(let k=0; k<allBowlersArrElem.length; k++){ //-->8
        let allColsPlElem = $(allBowlersArrElem[k]).find('td')
        // console.log('how many (td) player [',k,']= ',allColsPlElem.length)

        let playerName = $(allColsPlElem[0]).text()
        let wickets = $(allColsPlElem[4]).text()

    //     console.log(
    //         `WinningTeam: ${wTeamName}
    // playerName: ${playerName}
    // wickets   : ${wickets}
    //         `) 

        if(wickets>=hwt){
            hwt = wickets
            hwtName=playerName
        }
    } //for loop  ends

    console.log(
                `WinningTeam: ${wTeamName}
        highest wicket taker playerName: ${hwtName}
        wickets   : ${hwt}
                `)


                }
            }
        }

        // teamTable
    }
}