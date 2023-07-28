"use strict";

let sidepanelElement;
let sidePanelOverlayElement;

function getElementById(id) {
    const element = document.getElementById(id);
    if (element === null) throw new Error(`The ${id} element doesn't exist.`);
    return element;
}

window.onload = () => {
    sidepanelElement = getElementById("sidePanel");
    sidePanelOverlayElement = getElementById("sidePanelOverlay");
};

window.onresize = () => {
    if (window.innerWidth >= 1300) {
        if (sidePanelOverlayElement.className === 'toggled') {
            sidePanelOverlayElement.className = '';
        }
    }
};

function toggleSidepanel() {
    if (window.innerWidth >= 1300) {
        if (sidepanelElement.className === '') {
            sidepanelElement.className = 'expanded';
        } else {
            sidepanelElement.className = '';
        }
    } else {
        if (sidePanelOverlayElement.className === 'toggled') {
            sidePanelOverlayElement.className = '';
        } else {
            sidePanelOverlayElement.className = 'toggled';
        }
    }
}