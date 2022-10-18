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

tabs.forEach(tab => {
    // passo 2
    tab.addEventListener('click', function(){
        if(tab.classList.contains('select')){
            return;
        }

        selectTab(tab)

        showInfo(tab)
    })
});

function selectTab(tab){
    // passo 3
    const tabSelect = document.querySelector('.tab.select')
    tabSelect.classList.remove('select')

    // passo 4
    tab.classList.add('select')
}
function showInfo(tab){
     // passo 5
     const infoSelect = document.querySelector('.info.select')
     infoSelect.classList.remove('select')

     // passo 6
     const idOfInfo = `info-${tab.id}`

     const infoToshow = document.getElementById(idOfInfo)
     infoToshow.classList.add('select')
}