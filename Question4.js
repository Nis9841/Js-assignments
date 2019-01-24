/*Write a function that will take one argument (a number) and perform the following operations:
Take half of the number and store the result. Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
*/

"use strict";

var number;

function calculation(number){
    var half = number/2;
    console.log("half:" +(half));

    var sq= half**2;
    console.log("square:" +(sq));

    console.log("The area of cirlce is : " + (Math.PI*sq**2));
}

calculation(3);