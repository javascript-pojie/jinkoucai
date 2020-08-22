'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://47.114.113.209:9532"',
  API_DOWNLOAD:'"http://47.114.113.209/edu/imghttp/"'
})
