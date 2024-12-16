function btnButao() {
    document.querySelector("ul").style.display = "block"
}
function whatsapp() {
    window.location = "https://contate.me/big-refrigeracao"
}
        
const listaDoSite = document.querySelectorAll(".informacoes")

listaDoSite.forEach((lista, indice) =>{
    lista.addEventListener("click", ()=>{


        switch (indice){
            case 0:
                window.location = "instalacao.html"
                break
            case 1:
                window.location = "manutencao.html"
                break
            case 2:
                window.location = "quemsomos.html"
                break
            case 3:
                window.location = "ondeestamos.html"
                break
            case 4:
                window.location = "contatos.html"
                break
                
            
        } 
    })
})
