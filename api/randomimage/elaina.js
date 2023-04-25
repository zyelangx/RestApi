__path = process.cwd()
const axios = require('axios')
const { getFoto } = require('gilang-fetcher')
const fs = require('fs')


module.exports = (req, res) => {
    axios.get('https://raw.githubusercontent.com/HardToo/resourcesv1/main/random%20anime/elaina.json').then((resp) => {
        const a = resp.data
        const getImg = a[Math.floor(a.length * Math.random())]; getFoto(getImg, 'temp/elaina.png')

        res.status(200).sendFile(__path + '/temp/elaina.png')
    }).catch((err) => {
        res.status(500).json({
            msg: 'Server Internal Error!'
        })
    })
}
