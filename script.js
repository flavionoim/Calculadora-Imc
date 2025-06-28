function calcular() {
    let peso = document.getElementById("txtpeso");
    let altura = document.getElementById("txtaltura");
    let res = document.getElementById("res");
    let res2 = document.getElementById("res2");

    if (peso.value.length == 0 || altura.value.length == 0) {
        alert("Digite Seu Peso e Altura Antes de Calcular!");
    } else {
        let p = Number(peso.value);
        let alt = Number(altura.value);

        if (p <= 0 || alt <= 0) {
            alert("Peso e altura devem ser números positivos.");
            return;
        }

        let imc = p / (alt * alt);
        imc = imc.toFixed(0); 

        res.innerHTML = `Seu peso é de ${p}kg e sua altura é de ${alt}m. Seu IMC é: ${imc}`;

        if (imc < 18.5) {
            res2.innerHTML = `Tendo um IMC de ${imc}, você está abaixo do peso.`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            res2.innerHTML = `Tendo um IMC de ${imc}, você está no peso ideal.`;
        } else if (imc >= 25 && imc <= 29.9) {
            res2.innerHTML = `Tendo um IMC de ${imc}, você está com excesso de peso.`;
        } else if (imc >= 30 && imc <= 34.9) {
            res2.innerHTML = `Tendo um IMC de ${imc}, você está em Obesidade Tipo I.`;
        } else if (imc >= 35 && imc <= 39.9) {
            res2.innerHTML = `Tendo um IMC de ${imc}, você está em Obesidade Tipo II.`;
        } else {
            res2.innerHTML = `Tendo um IMC de ${imc}, você está em Obesidade Tipo III.`;
        }
    }
}