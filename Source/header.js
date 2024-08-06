class PageHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Page Title';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #f0f0f0;
                    padding: 10px;
                    margin-bottom: 20px;
                }
                h1 {
                    margin: center;
                }
            </style>
            <h1>Aplikasi Notes</h1>
        `;
    }
}

customElements.define('page-header', PageHeader);
