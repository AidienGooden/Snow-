function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const sections = document.querySelectorAll(".section");

// Foreach section when clicked
sections.forEach((section) => {
    section.addEventListener("click", () => {

        // remove active class from all another section and
        // add it to the selected section
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        section.classList.add("active");
    });
});

function myFunction() {
    let x = document.getElementById("text_1");
    let y = document.getElementById("text_2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
  }