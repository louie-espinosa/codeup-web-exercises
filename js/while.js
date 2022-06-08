"use strict";

// function double(n){
//     let i = 2
//     while (i <= 65536) {
//         console.log(i);
//         i *= 2;
//     }
// }
// double();

//Do while Loop
//An ice cream seller can't go home until she sells all of her cones. First write enough code that
// generates a random number between 50 and 100 representing the amount of cones to sell before you start
// your loop. In the loop your code should generate another random number between 1 and 5, simulating
// the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of
// cones sold to each person. The below code shows how to get the random numbers for this exercise.

function iceCream() {

    let allCones = Math.floor(Math.random() * 50) + 50;

    do  {
      let conesRemain = (Math.floor(Math.random() * 6)); //

        if(allCones >= conesRemain) {
            //happy path
           allCones = allCones - conesRemain; //
            console.log(conesRemain + " cone(s) sold! I have " + allCones)
        } else {
            //unhappy path
            console.log("I only have " + allCones + " left. Sorry, I cant sell you  " + conesRemain + ".");
        }


   } while (allCones !== 0);
}
iceCream();