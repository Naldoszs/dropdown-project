// selecting all neccesary elements as a global scope
const selectEl = document.querySelector(".js-select");

const optionContainerEl = document.querySelector(".js-options-container");

const iElement = selectEl.querySelector("i");

const optionEls = optionContainerEl.querySelectorAll(".option");

const spanEl = selectEl.querySelector(".js-span-el");

selectEl.addEventListener("click", function () {
  optionContainerEl.style.transition = "all 300ms";
  optionContainerEl.classList.toggle("open");

  //rotate the i tag
  iElement.classList.toggle("rotate");

  //calling d added event to option elements
  addEventToOptionEls();
});

//function to add event listner to all option ele

function addEventToOptionEls() {
  optionEls.forEach((option) => {
    option.addEventListener("click", () => {
      //removing initial active element on all option element
      optionEls.forEach((option) => option.classList.remove("active"));

      //adding it newly
      option.classList.add("active");

      //closng the dropdown back
      optionContainerEl.classList.remove("open");

      //changing the text in the span element
      spanEl.innerText = option.innerText;
    });
  });
}
