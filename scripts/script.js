const input = document.getElementById("input")
const button = document.getElementById("button")
const result = document.getElementById("result")

button.addEventListener("click",()=>{
    var number = input.value.trim()

    input.value = ""

    if (number == ""){return result.innerHTML = "Digite um valor"}

    for (i of number){
        console.log(i)
        if (i != 0 && i != 1){
            return result.innerHTML = "Valor inválido"
        }
    }  

    return result.innerHTML = `${number} -> ${parseInt(number, 2)}`
})