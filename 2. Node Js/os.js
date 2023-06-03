// os feature
let os = require("os")
console.log(os.arch())
console.log(os.platform());

// wifi information
console.log(os.networkInterfaces())

// server
console.log(os.cpus())