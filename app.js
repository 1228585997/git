const express = require('express')
const app = express()

app.use(express.static('./dist'))

// app.listen(8888, () => {console.log('sever running on http://localhost:8888')})
app.listen(8888, () => {console.log('启动端口 http://localhost:8888')})