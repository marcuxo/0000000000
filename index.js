console.log('testProyect')
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = new express()
app.set('port', process.env.PORT || 4099)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
  console.log('|=>',app.get('port'))
  console.log('despliege de aplicaion para pruebas')
})


