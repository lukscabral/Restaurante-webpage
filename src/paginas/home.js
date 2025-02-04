import imagem_background from "../assets/hero_bg2.jpg";
import "../styles/home.css";

const home = function(){
    const content_div = document.querySelector("#content");

    const home_content = document.createElement("div");
    home_content.classList.add("home_content");

    const hero_text = document.createElement("div");
    const titulo = document.createElement("h1");
    titulo.textContent = "Cafeteria Curitiba";
    hero_text.appendChild(titulo);

    const p_content = document.createElement("p");
    p_content.textContent = "Muito mais do que cafeteria de cafés especiais nos tornamos especialistas em proporcionar momentos únicos e criar boas memórias através de sensações e aromas que remetem as melhores lembranças da nossa vida.";
    hero_text.appendChild(p_content);

    home_content.appendChild(hero_text);

    const hero_img = document.createElement("img");
    hero_img.classList.add("hero");
    hero_img.src = imagem_background;
    home_content.appendChild(hero_img);
    content_div.appendChild(home_content);

    

}

export default home;