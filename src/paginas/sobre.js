import gmail from "../assets/email.svg";
import github from "../assets/github-mark.svg";
import linkedin from "../assets/linkedin.svg";
import site from "../assets/site.svg";

const sobre = function(){
    const content = document.querySelector("#content");

    const sobre_titulo = document.createElement("h1");
    sobre_titulo.textContent = "Sobre mim";

    const sobre_div = document.createElement("div");
    sobre_div.appendChild(sobre_titulo);
    sobre_div.classList.add("sobre_div");

    const sobre_p = document.createElement("p");
    sobre_p.textContent = "Me chamo Lucas e na verdade não tenho uma cafeteria kkkk. Sou Desenvolvedor fullstack e caso queira entrar em contato comigo, voce pode me encontrar pelo whastapp 41 98481-5013 ou pelos links abaixo:";
    sobre_div.appendChild(sobre_p);

    const links_div = document.createElement("div");
    links_div.classList.add("sobre_links");

    const link_site = document.createElement("a");
    link_site.href = "https://lukscabral.github.io/";
    const link_site_img = document.createElement("img");
    link_site_img.src = site;
    link_site.appendChild(link_site_img);
    links_div.appendChild(link_site);

    const link_gmail = document.createElement("a");
    link_gmail.href = "mailto:lukscabral95@gmail.com";
    const link_gmail_img = document.createElement("img");
    link_gmail_img.src = gmail;
    link_gmail.appendChild(link_gmail_img);
    links_div.appendChild(link_gmail);

    const link_github = document.createElement("a");
    link_github.href = "https://github.com/lukscabral";
    const link_github_img = document.createElement("img");
    link_github_img.src = github;
    link_github.appendChild(link_github_img);
    links_div.appendChild(link_github);
    
    const link_linkedin = document.createElement("a");
    link_linkedin.href = "https://www.linkedin.com/in/lucas-cabral-b5539399/";
    const link_linkedin_img = document.createElement("img");
    link_linkedin_img.src = linkedin;
    link_linkedin.appendChild(link_linkedin_img);
    links_div.appendChild(link_linkedin);

    content.appendChild(sobre_div);
    content.appendChild(links_div);
}

export default sobre;