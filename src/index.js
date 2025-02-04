import "./styles/sobre.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles.css";
import renderizar from "./functions/renderizar";
import initial_load from "./functions/initial_load";

import home from "./paginas/home";
import menu from "./paginas/menu";
import sobre from "./paginas/sobre";


const home_btn = document.querySelector("#home");
const menu_btn = document.querySelector("#menu");
const sobre_btn = document.querySelector("#sobre");

renderizar()
initial_load();



home_btn.addEventListener('click', function() {
    renderizar();
    home();
});

menu_btn.addEventListener('click', function() {
    renderizar();
    menu();
});

sobre_btn.addEventListener('click', function() {
    renderizar();
    sobre();
});