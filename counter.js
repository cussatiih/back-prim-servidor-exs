const express = require("express");

const app = express();

let contador = 0;

app.get("/contador", (req, res) => {
    contador++;
    res.send("Você já abriu esta página " + contador + " vez(es).");
});

app.get("/zerar", (req, res) => {
    contador = 0;
    res.send("Zerei!");
});

app.get("/atribuir", (req, res) => {
    console.log("contador era " + contador);
    const valor = req.query.valor;

    if (!valor) {
        res.status(400);
        res.send("Voce precisa informar o valor.");
    } else {
        contador = Number(valor);
        console.log("contador agora é " + contador);
        res.send("Atribuido com sucesso.");
    }

});
app.listen(8000);