const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db')

router.get('/', (req, res) => {
    console.log('main router')
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
})

router.post('/getJoinData', (req, res) => {
    // console.log('getJoinData router', req.body)
    const { id, pw, name } = req.body

    let sql = 'INSERT INTO LINK_MEMBER VALUES(?, ?, ?)'
    conn.query(sql, [id, pw, name], (err, rows) => {
        if (rows) {
            res.json({ result: 'success', name: name })
        } else {
            res.json({ result: 'failed' })
            console.error(err)
        }
    })
})

router.post('/getLoginData', (req, res) => {
    // console.log('getLoginData router', req.body)
    const { id, pw } = req.body

    let sql = 'SELECT USER_NAME FROM LINK_MEMBER WHERE ID =? AND PW=?'
    conn.query(sql, [id, pw], (err, rows) => {
        if (rows.length > 0) {
            res.json({ result: 'success', name: rows[0].USER_NAME })
        } else {
            res.json({ result: 'success' })
            console.error(err)
        }
    })
})

module.exports = router;