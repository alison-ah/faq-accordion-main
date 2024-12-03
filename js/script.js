const firstAccordionItem = document.querySelector(".first-accordion-item")
const firstPlus = document.querySelector(".first-plus")
const firstMinus = document.querySelector(".first-minus")
const firstAnswer = document.querySelector(".first-answer")

const secondAccordionItem = document.querySelector(".second-accordion-item")
const secondPlus = document.querySelector(".second-plus")
const secondMinus = document.querySelector(".second-minus")
const secondAnswer = document.querySelector(".second-answer")

const thirdAccordionItem = document.querySelector(".third-accordion-item")
const thirdPlus = document.querySelector(".third-plus")
const thirdMinus = document.querySelector(".third-minus")
const thirdAnswer = document.querySelector(".third-answer")

const fourthAccordionItem = document.querySelector(".fourth-accordion-item")
const fourthPlus = document.querySelector(".fourth-plus")
const fourthMinus = document.querySelector(".fourth-minus")
const fourthAnswer = document.querySelector(".fourth-answer")

firstAccordionItem.addEventListener("click", function () {
  if (firstMinus.classList.contains("hide")) {
    firstMinus.classList.remove("hide");
    firstPlus.classList.add("hide");
    firstAnswer.classList.remove("hide");
    firstAccordionItem.setAttribute("aria-expanded", true);
} else {
    firstMinus.classList.add("hide");
    firstPlus.classList.remove("hide");
    firstAnswer.classList.add("hide");
    firstAccordionItem.setAttribute("aria-expanded", false);
  }
});

secondAccordionItem.addEventListener("click", function () {
  if (secondMinus.classList.contains("hide")) {
    secondMinus.classList.remove("hide");
    secondPlus.classList.add("hide");
    secondAnswer.classList.remove("hide");
    secondAccordionItem.setAttribute("aria-expanded", true);
} else {
    secondMinus.classList.add("hide");
    secondPlus.classList.remove("hide");
    secondAnswer.classList.add("hide");
    secondAccordionItem.setAttribute("aria-expanded", false);
  }
});

thirdAccordionItem.addEventListener("click", function () {
  if (thirdMinus.classList.contains("hide")) {
    thirdMinus.classList.remove("hide");
    thirdPlus.classList.add("hide");
    thirdAnswer.classList.remove("hide");
    thirdAccordionItem.setAttribute("aria-expanded", true);
} else {
    thirdMinus.classList.add("hide");
    thirdPlus.classList.remove("hide");
    thirdAnswer.classList.add("hide");
    secondAccordionItem.setAttribute("aria-expanded", false);
  }
});

fourthAccordionItem.addEventListener("click", function () {
  if (fourthMinus.classList.contains("hide")) {
    fourthMinus.classList.remove("hide");
    fourthPlus.classList.add("hide");
    fourthAnswer.classList.remove("hide");
    fourthAccordionItem.setAttribute("aria-expanded", true);
} else {
    fourthMinus.classList.add("hide");
    fourthPlus.classList.remove("hide");
    fourthAnswer.classList.add("hide");
    secondAccordionItem.setAttribute("aria-expanded", false);
  }
});