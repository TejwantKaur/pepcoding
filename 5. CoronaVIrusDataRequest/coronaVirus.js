#!/usr/bin/env node

import request from 'request'
import cheerio from 'cheerio'
import chalk from 'chalk'

console.log('Before')
request('https://www.worldometers.info/coronavirus/', cb);
console.log('After')

function cb (error, response, html) {
    if(error){
        console.error('error: ' , error)
    }else{
        handle_html(html)
    }
};

function handle_html(html){
    let setTool = cheerio.load(html)
    let array = setTool('.maincounter-number span')

    // for(let i=0; i<array.length; i++){
    //    let data = setTool(array[i]).text();
    //    console.log('data ', data)
    // }

    let total = setTool(array[0]).text()
    let deaths = setTool(array[1]).text()
    let recovered = setTool(array[2]).text()

    console.log(chalk.blueBright('Total Cases: ' , total))
    console.log(chalk.red('Deaths: ', deaths)) 
    console.log(chalk.green('Recovered', recovered))
}



