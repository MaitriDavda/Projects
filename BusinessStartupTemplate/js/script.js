/* display the iconbar */

function iconMenuDisplay() {
    document.getElementById("iconSidebar").style.width = "55%";
}

/* close the iconbar */
function iconSidebarClose() {
     document.getElementById("iconSidebar").style.width = "0%";
}

/* display the modal */
function displayModel(element) {
    document.getElementById("myModel").style.display = "block";
    document.getElementById("modelimage").src = element.src;
    document.getElementById("caption").innerHTML = element.alt;
}

/* close the modal */
function closeModel() {
    document.getElementById("myModel").style.display = "none";
}