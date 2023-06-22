import pup from "puppeteer";
// import codeObj from "./code.js";
// const codeObj = require('./code')
import { answers } from './code.js';


const loginLink = "https://www.hackerrank.com/auth/login";


const email = 'wisix56284@ratedane.com';
const pass = "we_six56284";


let browserOpen = pup.launch({
  headless:false,
  defaultViewport:null,
  args:["--start-maximized"]
})

let page;

// newTab
browserOpen.then(function(browserObj){
  let browserNewPageOpenPromise = browserObj.newPage()
  return browserNewPageOpenPromise;
})
// hackerrank LoginLink
.then(function(newTab){
  page = newTab
  let hackerRankOpenPromise = newTab.goto(loginLink);
  return hackerRankOpenPromise;
})
.then(function(){
  let emailEntered = page.type('input[type="text"]', email);
  return emailEntered
})
.then(function(){
  let passEntered = page.type('input[type="password"]', pass);
  return passEntered
})
.then(function(){
      let loginClick = page.click('button[data-analytics="LoginPassword"]' , {delay:50})
      return loginClick
})
// wait for loginPage load
.then(function(){
    let algoSel = waitAndClick('.topic-card a[data-attr1="algorithms"]',page , {delay : 100})
    //  = page.click('[data-automation="algorithms"]',{delay : 50})
    return algoSel;
})
// .then(function(){
//   let getToWarmUp=waitAndClick('input[value="warmup"]',page)
//   getToWarmUp
// })
.then(function(){
    let gotoWarmUp = waitAndClick('.ui-icon-filter.fab-popup-icon',page ,{delay : 100})
    // console.log(gotoWarmUp.length)
    return gotoWarmUp
})
.then (function(){
    let clickWarmUp = waitAndClick('input[value="warmup"]',page , {delay : 100})
    return clickWarmUp
})
.then(function(){
    let clickApply = waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.apply-btn.ui-btn-styled',page, {delay : 100})
    return clickApply
})
.then(function(){
  let waitFor = page.waitForTimeout(3000)
  return waitFor;
})
// document.query selectoeAll --> $$
.then(function(){
  let allchallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-styled')
  return allchallengesPromise;
})
.then(function(questionArr){
  console.log('Number of Questions: ' , questionArr.length)
  
  let questionWillBeSolved = questionSolver(page, questionArr[0], answers[1])
  return questionWillBeSolved
})


function questionSolver(page, question, answer){
  return new Promise(function(resolve,reject){
    let quesWillBeClicked = question.click()
    quesWillBeClicked.then(function(){
      let editorInFocus = waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page , {delay:100})
      return editorInFocus
    })

    .then(function(){
      return waitAndClick('.checkbox-input',page)
    })
    .then(function(){
      return page.waitForSelector('textarea.custominput',page)
    })
    .then(function(){
      return page.type('textarea.custominput', answer)
    })
    .then(function(){
      return page.keyboard.down('Control' , {delay:100})
    })
    .then(function(){
      return page.keyboard.press('A' , {delay:100})
    })
    .then(function(){
      return page.keyboard.press('x' , {delay:100})
    })
    .then(function(){
      return page.keyboard.up('Control' , {delay:100})
    })
    
    .then(function(){
      let mainEditorInfocus = waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page)
      return mainEditorInfocus;
    })
    .then(function(){
      return page.keyboard.down('Control' , {delay:100})
    })
    .then(function(){
      return page.keyboard.press('A' , {delay:100})
    })
    .then(function(){
      return page.keyboard.press('v' , {delay:100})
    })
    .then(function(){
      return page.keyboard.up('Control' , {delay:100})
    })
    .then(function(){
      return page.click('.ui-btn-primary.pull-right', {delay:100})
    })
    .then(function(){
      resolve()
    })
    .catch(function(err){
      reject()
    })
    
    
  })
}


function waitAndClick(selector, cPage){
  return new Promise(function (resolve, reject){
    let waitForModelPromise = cPage.waitForSelector(selector)

    waitForModelPromise.then(function(){
      let clickModel = cPage.click(selector, {delay:50})
      return clickModel
    })
    .then(function(){
      resolve()
    })
    .catch(function(err){
      reject()
    })
  })
}