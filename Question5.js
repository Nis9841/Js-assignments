/*
Given the percentage of a student, find out the division of that student. Conditions:
Distinction if 100 > percentage >= 80
First Division if 80 > percentage >= 60
Second Division if 60 > percentage >= 40
Third Division if 40 > percentage >= 32
Else fail
*/

"use strict";

var percentage;

function show_division(percentage) {

    if (percentage <= 100 && percentage >= 80){
        console.log("Distinction");
    }

    else if (percentage < 80 && percentage >=60 ){
        console.log("First division");
    }

    else if (percentage < 60 && percentage >=40 ){
        console.log("second division");
    }

    else if(percentage < 40 && percentage >= 32) {
        console.log("Third Division");
    }

    else{
        console.log("fail");
    }
}
show_division(90);
show_division(41);
show_division(20);
show_division(76);