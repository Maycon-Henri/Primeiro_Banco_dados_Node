const express = require ('express');
const apiV2Router= express.Router();
const knexConfig = require ('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require ('knex') (knexConfig)



apiV2Router.get ('/produtos/:id', (req,res) => {
  //  let id = parseInt (req.params.id)
  //  let produto = produtos.find (p => p.id === id)
  //  if (produto){
    //  res.render ('index', {
    //    nome: produto.nome,
    //    descricao:produto.descricao,
    //  marca:produto.marca})
   // }
  
   // else
   // res.status(404).send ('<h2>Erro 404 - Produto não encontrado</h2>')
  })
  

  apiV2Router.get ('/produtos', (req, res) => { 
    knex ('produtos').select ('id','descricao','marca','valor')
    .then (dados => res.status(200).json (dados))
    .catch (err => {
      console.log (err)
      res.status(500).json({message:`Erro ao recuperar lista de produtos: ${err.message}`})
    })
})

apiV2Router.get ('/produtos/:id', (req, res) => {
   // let id = parseInt (req.params.id)
    //let produto = produtos.find (p => p.id === id)
   // res.status(200).json (produto)
})

apiV2Router.post('/produtos',(req,res)=>{
 // let produto = req.body
  //let maxID = Math.max.apply (Math, produtos.map (p=>p.id))
  //produto.id = maxID + 1 
  //produtos.push (produto)
  //res.status (201).json ({message: `Produto ${produto.nome}  criado com sucesso!`,
    //                data:{
    //                  id: produto.id,
     //                 nome: produto.nome,
      //              }})

                  })
module.exports = apiV2Router;