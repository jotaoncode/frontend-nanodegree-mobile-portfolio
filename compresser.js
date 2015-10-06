var compressor = require('node-minify');
new compressor.minify({
  type: 'uglifyjs',
  fileIn: [
    '../../node_modules/jquery/dist/jquery.js',
    '../../node_modules/q/q.js',
    '../../node_modules/materialize-css/bin/materialize.js',
    '../../node_modules/velocity-animate/velocity.js',
    '../../node_modules/jquery.easing/jquery.easing.js',
    '../../node_modules/typed.js/dist/typed.min.js',
    '../../node_modules/lodash/index.js'
  ],
  fileOut: 'vendors.js',
  callback: function (err) {
    if (err) {
      console.log('Uglifyjs Something goes wrong: ' + err);
    }
    console.log('Compressed all in vendors.');
  }
});
