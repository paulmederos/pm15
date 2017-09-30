const path = require('path');

module.exports = {
  entry: './assets/javascripts/source/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/javascripts/'),
    filename: 'app.bundle.js'
  }
};
