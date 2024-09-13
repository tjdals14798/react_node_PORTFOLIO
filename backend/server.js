const express = require('express')
const app = express()
const indexRouter = require('./routes')

const path = require('path')
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))

const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use('/', indexRouter)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`Server is running on ${app.get('port')}`)
})