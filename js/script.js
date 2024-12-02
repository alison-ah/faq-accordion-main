const firstAccordionItem = document.querySelector(".first-summary-item");
const firstPlus = document.querySelector(".first-plus")
const firstMinus = document.querySelector(".first-minus")

const secondAccordionItem = document.querySelector(".second-summary-item");
const secondPlus = document.querySelector(".second-plus")
const secondMinus = document.querySelector(".second-minus")

const thirdAccordionItem = document.querySelector(".third-summary-item");
const thirdPlus = document.querySelector(".third-plus")
const thirdMinus = document.querySelector(".third-minus")

const fourthAccordionItem = document.querySelector(".fourth-summary-item");
const fourthPlus = document.querySelector(".fourth-plus")
const fourthMinus = document.querySelector(".fourth-minus")

firstAccordionItem.addEventListener("click", function () {
  if (firstMinus.classList.contains("hide")) {
    firstMinus.classList.remove("hide");
    firstPlus.classList.add("hide");
} else {
    firstMinus.classList.add("hide");
    firstPlus.classList.remove("hide");
  }
});

secondAccordionItem.addEventListener("click", function () {
  if (secondMinus.classList.contains("hide")) {
    secondMinus.classList.remove("hide");
    secondPlus.classList.add("hide");
} else {
    secondMinus.classList.add("hide");
    secondPlus.classList.remove("hide");
  }
});

thirdAccordionItem.addEventListener("click", function () {
  if (thirdMinus.classList.contains("hide")) {
    thirdMinus.classList.remove("hide");
    thirdPlus.classList.add("hide");
} else {
    thirdMinus.classList.add("hide");
    thirdPlus.classList.remove("hide");
  }
});

fourthAccordionItem.addEventListener("click", function () {
  if (fourthMinus.classList.contains("hide")) {
    fourthMinus.classList.remove("hide");
    fourthPlus.classList.add("hide");
} else {
    fourthMinus.classList.add("hide");
    fourthPlus.classList.remove("hide");
  }
});