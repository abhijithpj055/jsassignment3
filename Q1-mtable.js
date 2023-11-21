var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit of multiplication : "));
let num = parseInt(readlineSync.question("Enter the Number : "));
for(let i=1;i<=limit;i++){
    console.log(num,'*',i,'=',num*i);
}
