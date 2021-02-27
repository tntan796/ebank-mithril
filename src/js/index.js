function toggleNav() {
    const mySideNavElm = document.getElementById("mySidenav");
    const mainElm = document.getElementById("main");
    if (mySideNavElm.classList.contains("open")) {
        mySideNavElm.style.width = "30px";
        mainElm.style.paddingLeft= "30px";
        // mainElm.style.paddingRight = "30px";
        mySideNavElm.classList.remove('open');
    } else {
        mySideNavElm.style.width = "250px";
        mainElm.style.paddingLeft = "250px";
        // mainElm.style.paddingRight = "250px";
        mySideNavElm.classList.add('open');
    }
}



toggleNav();


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}