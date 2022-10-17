/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconder o conteudo da aba anterior

    1- dar um jeito de pegar os elementos que representam as abas no HTML

    2- dar um jeito de identificar o clique no elemento da aba

    3- quando o usuario clicar, desmarcar a aba selecionada

    4- marcar a aba clicada como selecionada

    5- esconder o conteudo anterior

    6- mostrar o conteudo da aba selecionada
*/

// passo 1
// console.log(document.querySelectorAll('.tab'));
const tabs = document.querySelectorAll('.tab')

// passo 2
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
        
    })
});