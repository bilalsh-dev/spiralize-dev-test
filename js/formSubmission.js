window.addEventListener("load", function () {
  const inputFields = document.querySelectorAll(
    ".hero__form-container .hero__inp"
  );
  inputFields.forEach((input) => {
    input.value = "";
    input.addEventListener("focusout", function () {
      if (input.value !== "") {
        input.classList.add("focus");
      } else {
        input.classList.remove("focus");
      }
    });
  });

  const navOpener = document.querySelector(".hero__nav-toggle");
  navOpener.addEventListener("click", function () {
    console.log("click called");
    const navbarUl = document.querySelector(".hero__navbar ul");
    navbarUl.classList.add("open");
  });
});

function validate() {
  let num = 0;
  const inputFields = document.querySelectorAll(
    ".hero__form-container .hero__inp"
  );
  inputFields.forEach((input) => {
    if (input.value === "") {
      input.parentElement.classList.add("hero__empty");
    } else {
      input.parentElement.classList.remove("hero__empty");
      num++;
    }
  });

  const countrySelect = document.querySelector(".hero__drop-row select");
  if (countrySelect.value === "") {
    countrySelect.parentElement.classList.add("hero__empty");
  } else {
    countrySelect.parentElement.classList.remove("hero__empty");
    num++;
  }

  if (num === 5) {
    document.location = "thanks.html";
  }
}

document.addEventListener("click", function (event) {
  if (
    !event.target.classList.contains("hero__inp") &&
    !event.target.classList.contains("hero__nav-opener")
  ) {
    const inputFields = document.querySelectorAll(
      ".hero__form-container .hero__inp"
    );
    inputFields.forEach((input) => {
      input.parentElement.classList.remove("hero__empty");
    });
    document.querySelector(".hero__drop-row").classList.remove("hero__empty");
  }
});

const btnRow = document.querySelector(".hero__btn-row");
btnRow.addEventListener("click", function (e) {
  e.stopPropagation();
});
