const READLINE = require("readline-sync");

var max =+ process.argv[2];
if (max === undefined) {
    console.log("Please input the max num:");
    max =+ READLINE.prompt();
}

for (let i = 1; i < max + 1; i++) {

    let str = "";
    if (i % 3 === 0) {
        str = "Fizz";
    }
    if (i % 5 === 0) {
        str += "Buzz";
    }
    if (i % 7 === 0) {
        str += "Bang";
    }
    if (i % 11 === 0) {
        str = "Bong"; // overwrite everything in the front
    }
    if (i % 13 === 0) {
        let index = str.indexOf("B");
        if (index === -1) {
            str += "Fezz";
        } else {
            str = str.slice(0, index) + "Fezz" + str.slice(index);
        }
    }
    if (i % 17 === 0) {
        let reverse = "";

        for (let j = str.length - 4; j >= 0; j -= 4) {
            reverse += str.slice(j, j + 4);
        }
        str = reverse;
    }


    if (str === "") { // if no word is to be printed, print number
        str = i.toString();
    }
    console.log(`No${i}: ` + str);
}


