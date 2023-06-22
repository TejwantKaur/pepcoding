import pup from "puppeteer"

let page 
console.log("Before")

const browserOpenPromise = pup.launch({
    headless:false,
    slowMo:true,
    defaultViewport:null,
    args:["--start-maximized"]
})

browserOpenPromise.then(function(browser){
    const pagesArrPromise = browser.pages()
    return pagesArrPromise
}).then(function (browserPages){
    page = browserPages[0]
    let gotoPromise = page.goto("https://www.google.com/")
    return gotoPromise
}).then(function (){
    // waiting for the element to appear on the page
    let elemWaitPromise = page.waitForSelector("textarea#APjFqb",{ visible:true})
    return elemWaitPromise
}).then (function(){
    let keysSendPromise = page.type("textarea#APjFqb","pepcoding")
    return keysSendPromise
}).then (function (){
    let enterPressed = page.keyboard.press('Enter')
    return enterPressed
}).then(function (){
    let elemWaitPromise = page.waitForSelector("h3.MBeuO", {visible:true})
    return elemWaitPromise
}).then (function (){
    // mouse
    let keysSendPromise = page.click("h3.MBeuO")
    return keysSendPromise
}).catch (function (err){
    console.log(err)
})

console.log("After")