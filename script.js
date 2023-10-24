let numero1 = document.getElementById('n1')

let numero2 = document.getElementById('n2')

let resultado = document.getElementById('resultado')

function calcular(){
    if(numero1.value <= 10 && numero2.value <= 10){
        let n1 = Number(numero1.value)
        let n2 = Number(numero2.value)

        let soma = n1 + n2

        console.log(soma)

        resultado.value = soma
    } else{
        alert("O campo numero 1 deve ser um valor menor que 10")
    }

    
}