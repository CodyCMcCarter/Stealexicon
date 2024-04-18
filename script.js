//Grab the collapse buttons
var navButtons = document.getElementsByClassName("collapsible-button");

//Add event listener to each button
for(var i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("mousedown", function(e) {
        if(e.button === 0){
            HandleExpand(this);
        }
    });
}

//Handle the collapsing
function HandleExpand(button) {
    if (button.ariaExpanded === "true"){
        button.ariaExpanded = "false";
        button.nextElementSibling.classList.remove("show")
        button.nextElementSibling.classList.replace("collapse", "collapsing");
        setTimeout(() => {button.nextElementSibling.classList.replace("collapsing", "collapse")}, 350);
    }else {
        button.ariaExpanded = "true";
        button.nextElementSibling.classList.replace("collapse", "collapsing");
        setTimeout(() => {
            button.nextElementSibling.classList.replace("collapsing", "collapse")
            button.nextElementSibling.classList.add("show")
            });
    }
}