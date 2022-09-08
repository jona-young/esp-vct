/*
    Opens the menu and also assigns an off-menu which covers the rest of
    the screen aside from the main sidebar menu.

    The goal is to create a div beside the main menu that covers the rest
    of the page and when clicked triggers the closeMenu function or else the
    main page will be interactable aside from what is being blocked by the
    side menu which will be messy and unintended.
*/
function openMenu() {
    document.getElementById('side-menu').style.width = "500px";
    document.getElementById('header-offmenu').style.width = "100%";

}

// Function to close the sidebar menu which can be run by clicking X on the
// sidebar or clicking the off-menu div beside the sidebar menu when it is open
function closeMenu() {
    document.getElementById('side-menu').style.width = "0px";
    document.getElementById('header-offmenu').style.width = "0px";
}