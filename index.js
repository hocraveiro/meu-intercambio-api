const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const request = require('request')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/api/v1/cotacao', (req, res) => {
    request
      .get('https://www.melhorcambio.com/dolar_hoje/cotacao_cidade.php?idmoeda=11&idcidade=2&comercial=3%2C89', (error, response) => {
        res.json(response.body)
      })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
