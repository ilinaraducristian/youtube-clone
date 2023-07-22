"use strict";

customElements.define(
    "header-buttons",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("template-header-buttons");
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    },
  );