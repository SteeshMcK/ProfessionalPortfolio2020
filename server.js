const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname + 'public')))


require("./app/routing/htmlRoutes.js")(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})