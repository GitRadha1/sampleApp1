"use strict"
function circle(r)
{
    var pi=3.14;
    return pi*r*r;
}

let circle2 =(r) =>
{
    var pi=3.14;
    return pi*r*r;
}
let circle3 = (r) => 3.14*r*r;

console.log(circle(1));
console.log(circle2(2));
console.log(circle3(7));