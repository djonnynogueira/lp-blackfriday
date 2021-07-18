//variavel da mensagem de cadastro realizado
let msg = document.querySelector("#mensagem");

//saldando os dados no localstorage
function salvarForm() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.cont) {
            localStorage.cont = Number(localStorage.cont) + 1;
        } else {
            localStorage.cont = 1;
        }

        cad = document.getElementById("nomeId").value + ';' + document.getElementById("emailId").value;
        localStorage.setItem("cad_" + localStorage.cont, cad);

        msg.setAttribute("style", "display: block");
        msg.innerHTML = "<strong>Cadastro realizado com sucesso!</strong>";


        // return alert("Salvo");

        setTimeout(() => {
            document.location.reload();
            // window.location.href = "#"
        }, 3000)
    } else {}
}