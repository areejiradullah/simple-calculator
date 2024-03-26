#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action", type: "list", name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operators === "Addition") {
    console.log("your value is:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log("your value is:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log("your value is:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log("your value is:", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operators");
}
