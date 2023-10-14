import "./components/export"
import Card, { ImgAttribute } from "./components/Card/card";
import { GetApi2 } from "../service/dataFetch";
import { ApiType } from "./types/dataType";
class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

async connectedCallback() {
        // const Bringapi1 = await GetApi1()
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            `
            const button = this.ownerDocument.createElement("button")
            button.innerText = "Bring a fact"
            this.shadowRoot?.appendChild(button)

            button.addEventListener("click", async () =>{
                const Bringapi2 = await GetApi2()
                console.log(Bringapi2.fact)
                const something1 = this.ownerDocument.createElement("my-card") as Card
                something1.setAttribute(ImgAttribute.frase, Bringapi2.fact)
                this.shadowRoot?.appendChild(something1)

                // const Bringapi2 = await GetApi1()

                // something1.setAttribute(ImgAttribute.frase, Bringapi2.fact)
                // this.shadowRoot?.appendChild(something1)

            });
        }
    }
}

customElements.define('app-container', AppContainer)