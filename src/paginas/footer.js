const footer = function(){
    const footer_div = document.querySelector("#footer");
    const footer_p = document.createElement("p");
    footer_p.textContent = "Criado por Lucas Cabral 2025";
    footer_div.appendChild(footer_p);
};

export default footer;

