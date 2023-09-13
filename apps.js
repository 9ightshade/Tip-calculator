"use strict";
const billVar = document.querySelector(".billinput");
const percentVar = document.querySelectorAll(".percent-tip");
const customVar = document.querySelector(".custom-tip");
const peopleVar = document.querySelector(".people");
const tipDollarVar = document.querySelector(".tipdollar");
const totalDollarVar = document.querySelector(".totaldollar");
const formId = document.getElementById("form");
const reset = document.querySelector(".reset-btns");
let tipCalc;
let tipPercent;
let totalPerPerson;
//functions
console.log(billVar.value);
console.log(percentVar.innerHTML);

percentVar.forEach((percentVar) => {
    percentVar.addEventListener("click", (e) => {
        e.preventDefault();
        if (peopleVar.value >= 1 && billVar.value >= 1) {
            console.log(billVar.value);
            tipPercent =
                Number(percentVar.querySelector("span").textContent) / 100;
            tipCalc = (tipPercent * billVar.value) / peopleVar.value;
            console.log((tipDollarVar.textContent = tipCalc.toFixed(2)));

            totalDollarVar.textContent = totalPerPerson =
                billVar.value / peopleVar.value +
                Number(tipDollarVar.textContent);
            Number(totalPerPerson);
            console.log(
                (totalDollarVar.textContent = totalPerPerson.toFixed(2))
            );
        }
    });
});

customVar.addEventListener("click", (e) => {
    e.preventDefault();
    if (billVar.value >= 1 && peopleVar.value >= 1 && customVar.value >= 1) {
        tipPercent = customVar.value / 100;
        console.log(tipPercent);
        tipCalc = (tipPercent * billVar.value) / peopleVar.value;
        console.log(tipCalc);
        tipDollarVar.textContent = tipCalc.toFixed(2);
        console.log(tipDollarVar.textContent);

        totalPerPerson =
            billVar.value / peopleVar.value + Number(tipDollarVar.textContent);
        Number(totalPerPerson);
        console.log((totalDollarVar.textContent = totalPerPerson.toFixed(2)));
    }
});

//reset functionality
reset.addEventListener("click", (e) => {
    e.preventDefault();
    formId.reset();
    tipDollarVar.textContent = "0.00";
    totalDollarVar.textContent = "0.00";
});
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key.toLowerCase() == "escape") {
        formId.reset();
        tipDollarVar.textContent = "0.00";
        totalDollarVar.textContent = "0.00";
    }
});
