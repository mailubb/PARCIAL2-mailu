export enum ImgAttribute {
    "img" = "img",
    "frase" = "frase"
}

class Card extends HTMLElement{
    img?: string
    frase?: string

static get observerdAttributes(){
    const attrs: Record <ImgAttribute,null> = {
       img: null,
        frase: null 
    }
return Object.keys(attrs)
}

attributeChangedCallback(propName: ImgAttribute, oldValue: string | undefined, newValue: string | undefined){
switch (propName) {
    default:
        this[propName]=newValue
        break;
}
}

constructor(){
    super()
    this.attachShadow({mode:"open"})
}

connectedCallback(){
    this.render()
}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML = `
        
        <div>
        <img src="${this.img}" alt="">
        <p>${this.frase}</p>
        </div>
        `
    }
}
}

customElements.define("my-card", Card)
export default Card