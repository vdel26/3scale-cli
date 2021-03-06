(function() {
 var colors, pkg, print;
 colors = require("colors");
 pkg = require("../package.json");
 exports.print = print = function(options) {
     if (options && options.message && typeof options.message                  === 'string') {
         return console.log("[", "3scale-cli".white,   "]", options.message.toString().cyan);
     } else {
         throw new Error('no message defined to print!');
     }
 },
 exports.error = function(options){
   if (options && options.error) {
       return console.log("[", "3scale-cli".white,   "]", options.error.toString().red);
   } else {
       throw new Error('no message defined to print!');
   }
 };
}).call(this);
