function adicionarCaracter(caracter) {
    const valorDisplay = document.querySelector(".display");

    if (valorDisplay.value === "0" && caracter !== "AC" && caracter !== ".") {
        valorDisplay.value = "";
    }

    if(caracter=="+/-"){
        if(valorDisplay.value.includes("-")){
            valorDisplay.value = valorDisplay.value.replace("-","");
        }else{
            valorDisplay.value = "-"+ valorDisplay.value;
        }
    }

    

    if (caracter === "AC") {
        valorDisplay.value = "0";
    } else if (caracter === ".") {
        if (!valorDisplay.value.includes(".")) {
            let addponto=valorDisplay.value + "."
            valorDisplay.value=addponto;
        }
    } else if (caracter === "=") {
        const expressao = valorDisplay.value;

        try {
            const resultado = eval(expressao);
            valorDisplay.value = resultado;
        } catch (error) {
            valorDisplay.value = "Expressão Inválida";
        }
    } else {
        valorDisplay.value += caracter;
    }
}


function trocarSinal() {
    const valorDisplay = document.getElementById("tela");

    if (valorDisplay.value !== "0") {
        if (valorDisplay.value.includes("-")) {
            valorDisplay.value = valorDisplay.value.replace("-", "");
        } else {
            valorDisplay.value = "-" + valorDisplay.value;
        }
    }
}