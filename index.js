const readline = require("readline-sync");
const fs = require("fs");

function main() {
    const MAX = getMax();

    for (let i = 1; i < MAX + 1; i++) {
        console.log(`No${i}: ` + getOutput(i));
    }

}

function getOutput(num) {
    let output = "";
    let rules = JSON.parse(fs.readFileSync("./rules.json"));
    for (let r of rules.rules) {
        if (num % r.multiple === 0) {
            output = put_word(output, r);
            output = overwrite(output, r);
            if (r.reverse) {
                output = reverse(output);
            }

        }
    }

    if (output === "") {
        output = num.toString();
    }
    return output;
}

function put_word(output, r) {
    let index = output.indexOf(r.put_before);
    if (index === -1 || r.put_before === "") {
        output += r.word;
    } else {
        output = output.slice(0, index) + r.word + output.slice(index);
    }
    return output;
}

function overwrite(output, r) {
    for (let del_word of r.overwrite) {
        let index = output.indexOf(del_word);
        output = output.slice(0, index) + output.slice(index + 4);

    }
    return output;
}

function reverse(output) {
    let reverse = "";

    for (let j = output.length - 4; j >= 0; j -= 4) {
        reverse += output.slice(j, j + 4);
    }
    output = reverse;
    return output;
}

function getMax() {
    console.log("Please input the max num:");
    return parseInt(readline.prompt());
}

main();
