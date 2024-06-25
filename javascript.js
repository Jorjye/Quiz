const respostas = [];
respostas[0] = document.getElementsByName('Ex1');
respostas[1] = document.getElementsByName('Ex2');
respostas[2] = document.getElementsByName('Ex3');
respostas[3] = document.getElementsByName('Ex4');
respostas[4] = document.getElementsByName('Ex5');
respostas[5] = document.getElementsByName('Ex6');
let cont = 0;

document.addEventListener('DOMContentLoaded', () => {

    function contar() {
        cont++;
    }

    respostas.forEach(mudanca => {
        for (let x = 0; x < mudanca.length; x++) {
            mudanca[x].addEventListener('change', contar);
        }
    });
});

function responder() {

    var pontos = 0;
    var certas = [1 , 2 , 3 , 0 , 2, 0];

    if( cont >=6 ){

        for (var r = 0 ; r < respostas.length ; r++ ) {
            if (respostas[r][certas[r]].checked) {
                pontos++;
            } else {
                for (var e = 0 ; e < 4 ; e++ ) {
                    if (respostas[r][e].checked) {
                        respostas[r][e].parentElement.style.backgroundColor = '#f1807e';
                    }
                }
            }
            respostas[r][certas[r]].parentElement.style.backgroundColor = '#90ee90';
        } 
        
            document.getElementById("score").textContent = ("Pontuação: "+pontos+"/6");   
            document.getElementById("requerido").textContent = ("");


    }else{

        document.getElementById("requerido").textContent = ("Responda a todas as questões antes de confirmar");


    }

    // var resp_01_certa = "B";
    // var resp_02_certa = "C";
    // var resp_03_certa = "D";
    // var resp_04_certa = "A";
    // var resp_05_certa = "C";
    // var resp_06_certa = "A";
}