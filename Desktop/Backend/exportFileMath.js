const sum=(a,b) => a+b;
const mul=(a,b) => a*b;
const g=9.8;
const PI=3.14;

module.exports= {//module.exports ={sum:sum, mul:mul, g:g, PI:PI}
    sum:sum,
    mul:mul,
    g:g,
    PI:PI
}
//module.exports = obj;//we can also write as "exports.sum=sum; exports.mul=mul; exports.g=g; exports.PI=PI;"