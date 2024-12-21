//get all dropdowns

const selectMenuEls = document.querySelectorAll(".js-select-menu");

// loop through the select menus to get other things
selectMenuEls.forEach((selectMenu) => {
  //get the header selectn element for the selectMenu elements
  const selectHeaderEl = selectMenu.querySelector(".js-select-header");
  //get the caret element for the selectMenu elements

  const caretEl = selectMenu.querySelector(".caret");

  //get the ul items
  const menuOptionUlElement = selectMenu.querySelector(".menu-options");

  //get li elements
  const menuOptionLiEls = selectMenu.querySelectorAll(".menu-options li");

  //get the span element
  const spanEl = selectMenu.querySelector(".js-select-header .selected");

  // add click event on the selectHeaderEl element

  selectHeaderEl.addEventListener("click", () => {
    //add the clicked state to the selectHeader ele
    selectHeaderEl.classList.toggle("select-header__clicked");
    //add rotate state to the caret
    caretEl.classList.toggle("caret__rotate");

    //add open style to the drop down menu list
    menuOptionUlElement.classList.toggle("menu-options__open");
  });

  // add selected class to the individual li's
  menuOptionLiEls.forEach((li) => {
    li.addEventListener("click", (e) => {
      spanEl.innerText = e.target.innerText;

      menuOptionLiEls.forEach((listItem) =>
        listItem.classList.remove("active")
      );

      e.target.classList.add("active");
    });
  });
});
