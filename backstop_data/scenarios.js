const path = require('path')
module.exports = [
  ...require(path.resolve(__dirname, '../docs/views/Home.bs.js')),
  ...require(path.resolve(__dirname, '../docs/views/components/Grid.bs.js')),
  ...require(path.resolve(__dirname, '../docs/views/components/Images.bs.js')),
  ...require(path.resolve(__dirname, '../docs/views/components/NavLinks.bs.js')),
]
