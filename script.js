function imprimirNombre(){

    const nom = document.getElementById('nombre').value;
    
    alert('Tu nombre es: ' + nom)
}


function sumarNumeros(){

    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);
    const num3 = Number(document.getElementById('numero3').value);

    const results = num1 + num2 + num3;

    if(results <= 25){

        alert('La suma de los numeros es Menor a 25')
    } else{

        alert('Felicidades la suma de los numeros es: ' + results)
    }
}

function infoPersonal(){


    const edad = Number(document.getElementById('edad').value);
    const peso = Number(document.getElementById('peso').value);

     if(peso > 100){

        alert('Su edad es: ' + edad + ' Y su peso es: ' + peso + ' Usted tiene SOBREPESO') 
    } else{

        alert('Su edad es: ' + edad + ' y su peso: ' + peso + ' Muy Bien')
    }


}
