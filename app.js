__path = process.cwd()
const express = require('express')
const cors = require('cors')
const app = express()

// cors agar support web Xixi:)
app.use(cors())

// Assets
app.use('/', express.static(__path + '/views/assets'))

// Api fitur
app.get('/api/:path/:file', (req, res) => {
    const path = req.params.path
    const file = req.params.file
    try {
        require(__path + `/api/${path}/${file}.js`)(req, res)
    } catch (err) {
        return res.status(404).sendFile(__path + '/views/404.html')
    }
})

// Buat Sendiri Home Pagenya
app.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
// Not Found
app.all('*', (req, res) => {
    res.status(404).sendFile(__path + '/views/404.html')
});

app.listen('8000', () => {
    console.log('Server Running Port ' + 8000)
})

module.exports = app
