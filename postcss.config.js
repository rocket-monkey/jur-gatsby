const path = require('path')
const variables = require('./src/lib/postcss/variables')
const atImport = require(`postcss-import`)
const vars = require('postcss-simple-vars')
const functions = require('postcss-functions')
const cssNested = require('postcss-nested')
const cssNext = require('postcss-cssnext')
const postCssReporter = require('postcss-reporter')

module.exports = () => ({
  plugins: [
    atImport(),
    vars({
      variables: () => variables
    }),
    functions({
      glob: path.join(process.cwd(), 'src', 'lib', 'postcss', 'functions', '*.js')
    }),
    cssNested(),
    cssNext({
      // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['> 1%', 'last 2 versions', 'not ie <= 10'] // ...based on this browser list
    }),
    postCssReporter({
      // Posts messages from plugins to the terminal
      clearMessages: true
    }),
  ],
})