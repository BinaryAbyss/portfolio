/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByClassName("closebtn")[0].style.right = "25px";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("closebtn")[0].style.right = "-225px";
    document.getElementById("overlay").style.display = "none";
    //document.getElementById("main").style.backgroundColor = "white";
}