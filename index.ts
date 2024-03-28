#!/usr/bin/env node


import inquirer from "inquirer";

let mybalance = 10000; //Dollar

let mypin = 2002;

let answer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);

if (answer.pin === mypin) {
  console.log("correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select the one option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  console.log("operationAns");

  if(operationAns.operation === "fast cash"){
    let amountAns2 = await inquirer.prompt([
        {
         name: "fast",
         message: "How much cash you want to withdraw",
         type: "list",
         choices:[1000, 2000,5000,6000]
        } 
     ])
     mybalance -=amountAns2.fast;
    console.log(`yourbalance is :  ${mybalance}`);
  }else if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if(mybalance >= amountAns.amount){
        mybalance -= amountAns.amount;
    console.log(`your remaining balance is  ${mybalance}`);

    }else{
        console.log("influence ")
    }
    

  } else if (operationAns.operation === "check balance") {
    console.log(`yourbalance is :  ${mybalance}`);
  }
} else console.log("incorrect pin code");

console.log("thankyou");
