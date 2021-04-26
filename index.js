const express = require("express")
const app = express()
const port = 3312

app.get('/', (req, res) => {
  	res.contentType("text/plain")
	res.send(`${ (Math.round(Date.now() / 1000)).toString()}`)
// the one below returns millisecons, which produces a value that doesn't fit 32 bits
//res.send(`"${new Date().getTime().toString()}"`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
