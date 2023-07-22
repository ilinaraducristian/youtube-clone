"use strict";

function toggleSidepanel() {
    const sidepanelElement = document.getElementById("sidepanel");
    const bodyElement = document.querySelector("body");
    if (sidepanelElement === null) throw new Error("The sidepanel element doesn't exist.");
    if (bodyElement === null) throw new Error("The body element doesn't exist.");
    if (sidepanelElement.style.display === "none" || sidepanelElement.style.display === "") {
        sidepanelElement.style.display = "block";
        bodyElement.style.overflowY = "hidden";
    } else {
        sidepanelElement.style.display = "none";
        bodyElement.style.overflowY = "";
    }
}