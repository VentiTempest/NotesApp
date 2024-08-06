class IniFooter extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
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
            <h1>Created by: Venti-Tempest</h1>
        `;
    }
}

customElements.define('ini-footer',IniFooter);