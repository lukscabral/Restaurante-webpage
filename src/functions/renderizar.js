// funçao que limpa o conteudo dinamico antes de recarregar um novo
const renderizar = function() {
    const content = document.querySelector("#content");

    //remove todos os filhos de content
    while(content.firstChild){
        content.removeChild(content.firstChild); 
    }
}

export default renderizar;