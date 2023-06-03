let cp = require("child_process");
console.log("Trying to open Calculator");

// cp.execSync("code");
console.log('opened Calculator');

let outPut = cp.execSync("node abc.js");
console.log(outPut + " fire")