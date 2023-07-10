"use strict";

const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.querySelector(".btn");
const total = document.getElementById("total");

btn.addEventListener("click", () => {
  let billAmount = bill.value;
  let tipAmount = tip.value;
  let totalAmount = billAmount * (1 + tipAmount / 100);
  total.textContent = `$${totalAmount.toFixed(2)}`
});
