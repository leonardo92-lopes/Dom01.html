let h1 = document.querySelector('h1')
h1.innerText='Dom'
h1.style.background ='red'
h1.style.borderRadius='5px 5px 5px'
h1.style.width='500px'
h1.style.textAlign='center'
// let numberInput = prompt('digite um numerode 1 a 10')
//  alert(numberInput)
let valor = 20
function incrementa (){
   valor = 20 + 30
}
incrementa()

function mostraNome(leonardo){
    console.log(leonardo)
}
mostraNome('olá tudo bem com vc?')
mostraNome('seja muito bem vindo!')

function soma (nun1,nun2){
    const somarDoisnumeros=nun1+nun2
    console.log(somarDoisnumeros) 
}
soma(5,10)
soma(20,50)

const valorEmreal= document.querySelector('input')
function converter(){
   const ValorConvertido = valorEmreal.value  / 6
   alert (` o valor em dólar é ${ValorConvertido } dólares!`)

}
