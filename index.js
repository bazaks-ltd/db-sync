const args = process.argv;

const  methods = require('./src');
if (args.length < 3) {
    throw "needs 3 args: node index.js <3rd arg = function name>";
}

if (!methods[args[2]]) {
    throw "method not found";
} 


methods[args[2]]();
