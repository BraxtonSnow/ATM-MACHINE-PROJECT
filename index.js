let number = 1000;
let boolean = false;
let index = 0;
let num = 0;
const div = document.createElement("div");
const balanceButtonContainer = document.querySelector(
  ".balance-button-container"
);
const newBalanceButtonContainer = document.querySelector(
  ".balance-button-container"
);
const depositButtonContainer = document.querySelector(
  ".deposit-button-container"
);
const newDepositButtonContainer = document.querySelector(
  ".deposit-button-container"
);
const withdrawButtonContainer = document.querySelector(
  ".withdraw-button-container"
);
const newWithdrawButtonContainer = document.querySelector(
  ".withdraw-button-container"
);
let queryArray = [
  newBalanceButtonContainer,
  newDepositButtonContainer,
  newWithdrawButtonContainer,
];

const textBox = document.createElement("input");
textBox.className = "input";

function mathDepositWithdraw() {
  if (textBox.value !== "" && num === 1) {
    let userInput = textBox.value;
    console.log(userInput);
    let newUserInput = parseFloat(userInput);
    textBox.value = "";
    queryArray[1].removeChild(div);

    console.log("mathDepositWithdraw if");

    return (number += newUserInput), (boolean = false), (num = 0);
  } else if (textBox.value !== "" && num === 2) {
    let userInput = textBox.value;
    console.log(userInput);
    let newUserInput = parseFloat(userInput);
    textBox.value = "";
    queryArray[2].removeChild(div);

    console.log("mathDepositWithdraw else if");

    return (number -= newUserInput), (boolean = false), (num = 0);
  } else {
    console.log("mathDepositWithdraw else");
    if (num === 1) {
      queryArray[1].removeChild(div);
      textBox.value = "";
      console.log("mathDepositWithdraw 1");
      return (boolean = false), (num = 0);
    } else if (num === 2) {
      queryArray[2].removeChild(div);
      textBox.value = "";
      console.log("mathDepositWithdraw 2");
      return (boolean = false);
    } else {
      queryArray[0].removeChild(div);
      console.log("mathDepositWithdraw 3");
      return (boolean = false), (num = 0);
    }
  }
}

function getBalance() {
  if (boolean === true) {
    queryArray[index].removeChild(div);

    div.textContent = `Your current balance is $${number}`;
    div.className = "current-balance";
    balanceButtonContainer.appendChild(div);
    return (boolean = false), (num = 0);
  } else {
    div.textContent = `Your current balance is $${number}`;
    div.className = "current-balance";
    balanceButtonContainer.appendChild(div);
    return (boolean = true), (index = 0), (num = 0);
  }
}

function makeDeposit() {
  if (boolean === true) {
    queryArray[index].removeChild(div);

    depositButtonContainer.appendChild(div);
    div.textContent = "How much would you like to Deposit?";
    div.className = "deposit-content";
    div.appendChild(textBox);

    return (boolean = false), (num = 1);
  } else {
    depositButtonContainer.appendChild(div);
    div.textContent = "How much would you like to Deposit?";
    div.className = "deposit-content";
    div.appendChild(textBox);
    return (boolean = true), (index = 1), (num = 1);
  }
}

function makeWithdrawl() {
  if (boolean === true) {
    queryArray[index].removeChild(div);

    withdrawButtonContainer.appendChild(div);
    div.textContent = "How much would you like to Withdraw?";
    div.className = "withdraw-content";
    div.appendChild(textBox);
    return (boolean = false), (num = 2);
  } else {
    withdrawButtonContainer.appendChild(div);
    div.textContent = "How much would you like to Withdraw?";
    div.className = "withdraw-content";
    div.appendChild(textBox);
    return (boolean = true), (index = 2), (num = 2);
  }
}

const balanceButton = document.getElementById("balance");
balanceButton.addEventListener("click", getBalance);

const depositButton = document.getElementById("deposit");
depositButton.addEventListener("click", makeDeposit);

const withdrawButton = document.getElementById("withdraw");
withdrawButton.addEventListener("click", makeWithdrawl);

const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", mathDepositWithdraw);
