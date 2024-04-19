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
//EVENTS
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
let countDownDate = new Date("Sep 1, 2024 12:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerText = days + " : " + hours + " : " + minutes + " : " + seconds;
    if(distance < 0){
        clearInterval(x);
        document.getElementById('timer').innerText = "EXPIRED";
    }
}, 1000);

//WEATHER
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id))
  {js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
  fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');







  document.getElementById("drop").addEventListener("click", function(e) {
    document.getElementById("myDropdown").classList.toggle("show");
  });
  
  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
      document.querySelectorAll(".dropdown-content.show")
        .forEach(openDropdown => openDropdown.classList.remove('show'))
    } 
  });

  //Empolyment//
  function ValidateForm(frm) {
    if (frm.First_Name.value == "") { alert('First name is required.'); frm.First_Name.focus(); return false; }
    if (frm.Last_Name.value == "") { alert('Last name is required.'); frm.Last_Name.focus(); return false; }
    if (frm.Email_Address.value == "") { alert('Email address is required.'); frm.Email_Address.focus(); return false; }
    if (frm.Email_Address.value.indexOf("@") < 1 || frm.Email_Address.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.Email_Address.focus(); return false; }
    if (frm.Position.value == "") { alert('Position is required.'); frm.Position.focus(); return false; }
    if (frm.Phone.value == "") { alert('Phone is required.'); frm.Phone.focus(); return false; }
    return true; }