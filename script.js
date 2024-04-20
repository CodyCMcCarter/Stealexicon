$(".collapsible-button").on("click", function() {
    HandleExpand(this);
});

var sideBar = document.querySelector(".sidebar");

$(".phone-menu").on("click", function(e) {
    if(e.button === 0 && sideBar.classList.contains("show")){
        sideBar.classList.remove("show");
    } else {
        sideBar.classList.add("show");
    }
});

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