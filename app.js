// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const time = new Date()
  const options = { hour12: false }
  const nowTime = time.toLocaleString('zh-TW', options)
  // console.log(`伺服器收到請求的時間戳記 ${nowTime} | ${req.method} from ${req.originalUrl}|| ${time.getUTCMilliseconds()}`)

  res.on('finish', () => {
    const endTime = new Date()
    // const end = endTime.toLocaleString('zh-TW', options)
    const totalTime = endTime - time
    // console.log(`伺服器送出回應的時間戳記 ${end} || ${endTime.getUTCMilliseconds()}`)
    // console.log("我是分隔------------------------------------------------")
    console.log(`${nowTime} | ${req.method} from ${req.originalUrl} | total time: ${totalTime}ms`)
  })
  next();
});

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})