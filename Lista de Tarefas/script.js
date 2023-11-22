let texto = document.querySelector("#descricao")
let lista = document.querySelector("#tarefas")
let adicionarTexto = document.querySelector("#adicionar");
adicionarTexto.addEventListener("click", function(){
    implementar(texto.nodeValue, lista)
})
function implementar(a,  b){
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(texto))
    lista.appendChild(li)
        
    
}
