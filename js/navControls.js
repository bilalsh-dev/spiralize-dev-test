document
  .querySelector(".hero__nav-toggle")
  .addEventListener("click", function () {
    var navbarList = document.querySelector(".hero__navbar ul");

    var currentHeight = navbarList.offsetHeight;

    if (currentHeight === 0) {
      navbarList.style.display = "block";
    } else {
      navbarList.style.display = "none";
    }
  });
