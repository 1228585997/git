const express = require('express')
const app = express()

app.use(express.static('./dist'))

app.listen(8888, () => {console.log('sever running at http://localhost:8888')})
