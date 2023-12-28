// Le o arquivo de configurações .env
require ('dotenv').config ()

const express = require ('express')
const morgan = require ('morgan')
const app = express ()



// monte um array de produtos com campos de id, nome, marca, descricao, preço e quantidade em estoque. Seja criativo nos itens desse array, apresentando produtos reais em um número de 10 a 15 itens

app.use (express.json())
//app.use(express. urlencoded())
app.use (express.urlencoded ({extended:true}))

app.set('view engine', 'ejs')
app.set('views','./views')

//app.use ((req, res, next) => {
  // console.log (`Data: ${new Date()} - Method: ${req.method} - URL: ${req.url}`)
    //next ()
//})

app.use (morgan('common'))

app.use('/site', express.static ('public', {extensions:['html','htm']}))


app.get ('/',(req, res, next) => {
  console.log (`Data: ${new Date()} - Method: ${req.method} - URL: ${req.url}`)
  next ()
},
(req, res)  => {
    res.send (`Hello to API World<br>
        <a href="/api/produtos">API de Produtos</a>`)
})


// Desvia chamadas da API para o roteador
const apiV1Router = require ('./routes/apiV1Router')
app.use ('/api/v1',apiV1Router)

const apiV2Router = require ('./routes/apiV2Router')
app.use ('/api/v2',apiV2Router)


     //app.post('/api/produtos',express.json(),(req,res)=>{
      //res.status (200).send (`Recebido o nome: ${req.body.nome}`)})

app.use ((req, res) => {
    res.status(404).send (`<h2>Erro 404 - Recurso não encontrado</h2>`)
})


app.listen (3000, () => {
    console.log ('Servidor rodando na porta 3000')
})
