function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

        // selecting all sections with class of section
        const sections = document.querySelectorAll(".services_card");
        
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