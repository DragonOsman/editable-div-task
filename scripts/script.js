"use strict";

const viewDiv = document.querySelector("#view");
const textArea = document.createElement("textarea");
viewDiv.addEventListener("click", () => {
  textArea.classList.add("edit");
  textArea.value = viewDiv.innerHTML;

  textArea.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      textArea.blur();
    }
  });

  textArea.addEventListener("blur", () => {
    viewDiv.innerHTML = textArea.value;
    textArea.replaceWith(viewDiv);
  });

  viewDiv.replaceWith(textArea);
  textArea.focus();
});
