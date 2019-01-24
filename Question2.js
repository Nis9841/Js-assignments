/*
Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

"use strict";

var radius=7;

function cir(radius){
    var circum= 2 * Math.PI * radius;
    console.log ("The circumference is :" +circum);
}

function area(radius){
    var area_of_circle= Math.PI * radius **2;
    console.log ("The area is :" +area_of_circle);
}

cir(radius);
area(radius);