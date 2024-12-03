const firstAccordionItem = document.querySelector(".first-accordion-item")
const firstPlus = document.querySelector(".first-plus")
const firstMinus = document.querySelector(".first-minus")
const firstContent = document.querySelector(".first-content-item")

const secondAccordionItem = document.querySelector(".second-accordion-item")
const secondPlus = document.querySelector(".second-plus")
const secondMinus = document.querySelector(".second-minus")
const secondContent = document.querySelector(".second-content-item")

const thirdAccordionItem = document.querySelector(".third-accordion-item")
const thirdPlus = document.querySelector(".third-plus")
const thirdMinus = document.querySelector(".third-minus")
const thirdContent = document.querySelector(".third-content-item")

const fourthAccordionItem = document.querySelector(".fourth-accordion-item")
const fourthPlus = document.querySelector(".fourth-plus")
const fourthMinus = document.querySelector(".fourth-minus")
const fourthContent = document.querySelector(".fourth-content-item")

firstAccordionItem.addEventListener("click", function () {
  if (firstMinus.classList.contains("hide")) {
    firstMinus.classList.remove("hide");
    firstPlus.classList.add("hide");
    firstContent.classList.remove("hide");
} else {
    firstMinus.classList.add("hide");
    firstPlus.classList.remove("hide");
    firstContent.classList.add("hide");
  }
});

secondAccordionItem.addEventListener("click", function () {
  if (secondMinus.classList.contains("hide")) {
    secondMinus.classList.remove("hide");
    secondPlus.classList.add("hide");
    secondContent.classList.remove("hide");
} else {
    secondMinus.classList.add("hide");
    secondPlus.classList.remove("hide");
    secondContent.classList.add("hide");
  }
});

thirdAccordionItem.addEventListener("click", function () {
  if (thirdMinus.classList.contains("hide")) {
    thirdMinus.classList.remove("hide");
    thirdPlus.classList.add("hide");
    thirdContent.classList.remove("hide");
} else {
    thirdMinus.classList.add("hide");
    thirdPlus.classList.remove("hide");
    thirdContent.classList.add("hide");
  }
});

fourthAccordionItem.addEventListener("click", function () {
  if (fourthMinus.classList.contains("hide")) {
    fourthMinus.classList.remove("hide");
    fourthPlus.classList.add("hide");
    fourthContent.classList.remove("hide");
} else {
    fourthMinus.classList.add("hide");
    fourthPlus.classList.remove("hide");
    fourthContent.classList.add("hide");
  }
});