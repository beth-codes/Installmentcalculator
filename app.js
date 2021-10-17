"use strict";

const form = document.querySelector("form");
const submit = document.querySelector(".submit");
const amount = document.querySelector("#amt");
const installments = document.querySelector("#no-times");
const summation = document.querySelector("#sumation");

form.addEventListener("submit", init);

let operation = [];

function init(e) {
	e.preventDefault();
	checkAmount();
	checkInstallment();
	calculateInstallment();

	if (amount.value) summation.value = "";

   
}

function checkAmount() {
	if (!amount.value) {
		amount.style.borderColor = "red";
		const small = document.querySelector("small");
		small.innerText = "cannot be empty";
		small.style.display = "block";
	} else if (amount.value === "0") {
		amount.style.borderColor = "red";
		const small = document.querySelector("small");
		small.innerText = "amount cannot be zero";
		small.style.display = "block";
	} else if (amount.value) {
		console.log(typeof amount.value);

		amount.style.borderColor = "green";
		const small = document.querySelector("small");
		small.style.display = "none";

		operation.push(amount.value);
		summation.value = "";
	}
}

function checkInstallment() {
	if (!installments.value) {
		amount.style.borderColor = "red";
		const small = document.querySelector("small");
		small.innerText = "cannot be empty";
		small.style.display = "block";
	} else if (installments.value === "0") {
		console.log(typeof installments.value);
		operation.push("1");
	} else if(installments.value >3){
      const small = document.querySelector("small");
      small.innerText = "n cannot be more than 4";
      small.style.color = "red";
      small.style.display = "block";
      operation.push("0");
   } else if (amount.value) {
		amount.style.borderColor = "green";
		const small = document.querySelector("small");
		small.innerText = "valid";
		small.style.display = "none";
		operation.push(installments.value);
	}

   setTimeout(clearError, 3000)
}

function clearError() {
   document.querySelector("small").remove();
}

function calculateInstallment() {
	console.log(operation);
	let result = operation.join("/");
	let displayResult = eval(result);
	console.log(displayResult);
	summation.value = displayResult;
	console.log(summation.value);
	console.log(summation);

	amount.value = "";
	installments.value = "";
	operation = [];

}

