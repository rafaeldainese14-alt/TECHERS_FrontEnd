// class Pessoa{
//     constructor(nome,idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }
// const tio = new Pessoa("GT",18)

// class Hero{
//     constructor(herói,poder,design,origem){
//         this.herói = herói
//         this.poder = poder
//         this.design = design
//         this.origem = origem
//     }
// }

//     const tio = new Hero("Guardião Obscuro",matéria,preto,monstro)


class PopupInfo extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){

        const wrapper = document.createElement('span');
        wrapper.setAttribute("class","wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class","icon");
        icon.setAttribute("tabindex",0);

        const info = document.createElement("span");
        info.setAttribute("class","info");

        const text = this.getAttribute("data-text");
        info.textContent = text;

        let imgUrl;

        if(this.hasAttribute("img")){
            imgUrl = this.getAttribute("img");
        }else{
            imgUrl = "c44846afe13b1804fd3c9ad2e821ce16.jpg";
        }

        const img = document.createElement('img');

        img.src = imgUrl;

        img.setAttribute("alt","Icone de informação");
        img.setAttribute("width","100px");

        icon.appendChild(img);

        wrapper.appendChild(icon);
        wrapper.appendChild(info);

        this.appendChild(wrapper);
    }
}

customElements.define("popup-info", PopupInfo);