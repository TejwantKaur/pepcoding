import req from 'request'
import ch from 'cheerio'
import matches from './allMatch.js';
import fs from 'fs'
import path from 'path'

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'


import { fileURLToPath } from 'url';
// import path from 'path';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const iplPath = path.join(path.dirname(currentModulePath), 'ipl');


// const iplPath = path.join(__dirname, 'ipl')
// const iplPath = new URL('./ipl', import.meta.url).pathname;

dirCreater(iplPath)

// home pg
req (url, cb)

function cb(err, request, html){
    if(err){
        console.log(err)
    }else{
        // console.log('else')
        extractLink(html)
    }
}

function extractLink(html){
    let $ = ch.load(html)
    let anchorElem = $('a[href="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results"]');
    let link = anchorElem.attr('href')
    // console.log(link)
    let fullLink = "https://www.espncricinfo.com"+link //all results
    console.log(fullLink)

    // matches.matches(fullLink)
    matches.getAllMatchesLink(fullLink);
}

function dirCreater(filePath){
    if (fs.existsSync(filePath)==false){
        fs.mkdirSync(filePath)
    }
}
