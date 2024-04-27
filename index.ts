#! /usr/bin/env node

import inquirer from "inquirer";


//declare a constant answer and assign it to the result of inquirer.prompt function

const answers : {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to const the word!",

    }
])


const words = answers.sentence.trim().split(" ")

//print the array of words to the console
console.log;{words}


//printbthe word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);