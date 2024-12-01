const accordionItem = document.querySelector("summary");

accordionIcon.forEach(img =>
  accordionIcon.addEventListener("click", () => {
    const isMinus = img.classList.contains("minus hide");
    accordionItems.forEach(isMinus => img.classList.remove("hide"));
    if (!isMinus) {
      img.classList.add("hide");
    }
  })
);

plus.img.classList.add("hide");
minus.img.classList.remove("hide");