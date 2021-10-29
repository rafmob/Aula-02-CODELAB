const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const listaFilmes = [
    {
        id: Date.now(),
        nome: 'Central do Brasil',
        genero: 'Nacional',
        ano: 1998,
        nota:7.5,
        imagem: 'https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27207532.jpg%27&ImageUrl=%27207532.jpg%27&EntityType=%27Item%27&EntityId=%2715926%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540'
    },
    {
        id: Date.now(),
        nome: 'Parasita',
        genero: 'Suspense',
        ano: 2019,
        nota:9,
        imagem: 'https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27213010.jpg%27&ImageUrl=%27213010.jpg%27&EntityType=%27Item%27&EntityId=%2719223%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540'
    }
]

app.get("/", (req, res) =>{
    res.send("Olá turma!");
})

app.get("/listaFilmes", (req, res) =>{
    res.send(listaFilmes);
})

app.get('/listaFilmes/:id', (req, res) => {
    const idParam = req.params.id;
const lista = listaFilmes.find((lista) => lista.id == idParam)
    res.send(lista);
})

// app.post("/listar", (req, res) =>{
//     res.send(`Bem vindo ao listar ${req.body.nome}`);
// })

app.post("/listaFilmes", (req, res) =>{
    const { id, nome, genero, ano, nota, imagem } = req.body;
    res.send(lista);
});

// app.post('/addFilme', (req, res) => {
//     const addFilmes = req.body;
//     addFilmes.id = Date.now();
//     addFilmes.push(listaFilmes);
//     res.status(201).send({
//         message: 'Cadastro com sucesso',
//         data: addFilmes
//     });
// })

app.post("/adicionar", (req,res) =>{
    const { nome, genero, ano, nota, imagem } = req.body;
    listaFilmes.push(nome, genero, ano, nota, imagem); 
    res.send(listaFilmes);
    res.status(201).send({
        message: 'Cadastro com sucesso',
        data: adicionar
    });
});

// app.put("/listar2/:id", (req, res) =>{
//     const id = req.params.id -1;
//     const { nome } = req.body;
//     lista[id] = nome;
//     res.send(lista);
// });



// definir a porta onde irá executar o meu servidor Back-End
const port = 3000;

// inicializamos o servidor na porta pré definida.
app.listen(port, () => {
    console.log('o app está rodando na porta http://localhost:3000/');
})