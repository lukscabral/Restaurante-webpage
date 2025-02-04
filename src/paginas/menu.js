import cafe1 from "../assets/cafe1.jpg";
import cafe2 from "../assets/cafe2.jpg";
import cafe3 from "../assets/cafe3.jpg";
import cafe4 from "../assets/cafe4.jpg";
import cafe5 from "../assets/cafe5.jpg";
import cafe6 from "../assets/cafe6.jpg";
import "../styles/menu.css";
//[cafe1,cafe2,cafe3,cafe4,cafe5,cafe6];
const menu = function(){
    const cardapio = [
        {
            url : cafe1,
            titulo: "Cappuccino",
            preço: "R$3,99"
        },
        {
            url : cafe2,
            titulo: "Café Expresso",
            preço: "R$3,99"
        },
        {
            url : cafe3,
            titulo: "Café gelado",
            preço: "R$4,99"
        },
        {
            url : cafe4,
            titulo: "Café Especial",
            preço: "R$7,99"
        },
        {
            url : cafe5,
            titulo: "Cappuccino gelado",
            preço: "R$5,99"
        },
        {
            url : cafe6,
            titulo: "Irish Coffee",
            preço: "R$7,99"
        }
    ];
    const content = document.querySelector("#content");
    const card_container = document.createElement('div');
    card_container.classList.add("card_container");
    const titulo_principal = document.createElement("h1");
    titulo_principal.textContent = "Nossa Seleção de cafés";
    content.appendChild(titulo_principal);

    cardapio.forEach(cafe => {
        

        const card = document.createElement("div");
        card.classList.add("card");
        const card_img = document.createElement("img");
        card_img.src = cafe.url;
        card.appendChild(card_img);

        const card_titulo = document.createElement("h3");
        card_titulo.textContent = cafe.titulo;
        card.appendChild(card_titulo);

        const card_preço = document.createElement("p");
        card_preço.textContent = cafe.preço;
        card.appendChild(card_preço);
        
        card_container.appendChild(card);
        content.appendChild(card_container);
    });
}

export default menu;