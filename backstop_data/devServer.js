// This file will spin up a quick dev server to use on the docker image when running Backstop on docker.
const express = require('express')

const app = express()
const port = 8080

app.use(express.static('./docs/dist'));
module.exports = app.listen(port, () => {
  console.log(`Dev server listening on port ${port}`)
})
