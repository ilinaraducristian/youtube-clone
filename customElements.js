"use strict";

function defineBasicCustomElement(name, templateId) {
  customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(document.getElementById(templateId).content.cloneNode(true));
      }
    },
  );
}

defineBasicCustomElement("header-buttons", "template-header-buttons");
defineBasicCustomElement("video-li", "template-video");