function verificarRespuestas(){

    let total = 9;
    let puntos = 0;

    let myForm = document.forms["quizForm"];
    let respuesta = "a";
    

    for(let i = 1; i < total + 1; i++){
        if (myForm["p" + i].value === null || myForm["p" + i].value === ""){
            alert("Por favor, responde la pregunta " + i +".");
            return false
        }else{
            if(myForm["p" + i].value === respuesta){
                puntos++;
            }else{

            }
        }
    };

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h3>Obtuviste <span>" + puntos + "</span> de <span>" + total + " puntos</span></h3>";
    let correccion = document.getElementById("correccion");
    if(puntos != 9){
        correccion.innerHTML = `<img class="image" src="images/kuromi-false.png"><br/>
        Se detectaron ${total - puntos} respuestas incorrectas. Corregir para continuar.<br/>PISTA: Todas las respuestas son verdaderas, sos perfecta por donde se te mire.`
    }else{correccion.innerHTML = `<img class="image" src="images/kuromi-true.png"><br/>
    ¡Feliciaciones por aprobar el cuestionario! Oficialmente sos una princesa, te recomendamos leer la siguiente <a href="https://felizcumplegabu.carrd.co/">carta</a>.
    `};

    return false;
}