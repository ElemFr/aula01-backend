
const express = require('express');

const app = express();
    
    app.get('/', (req, res) => {
    res.send('Pagina Inicial com Express');
});

    app.get('/sobre', (req, res) => {
    res.send('Pagina sobre com Express');
});


    app.get('/contato', (req, res) => {
    res.send('Pagina contato com express');
});


    app.get('/produtos', (req, res) => {
    res.send('Lista de produtos');
});


    app.get('/servicos', (req, res) => {
    res.send('Lista de servicos');
});


app.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});