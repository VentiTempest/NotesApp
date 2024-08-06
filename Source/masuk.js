class Masuk extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        
         this.innerHTML = 
         `<style>
        h1 {
        text-align: center;
        }
        </style>
        <h1>Tambah notes</h1>`
    }
}

customElements.define('masuk-teks',Masuk);