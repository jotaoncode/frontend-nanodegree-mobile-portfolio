var Compressor = require('node-minify');
module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      pizza: {
        options: {
          engine: 'im',
          sizes: [{
            width: 750
          }, {
            width: 165
          }]
        },
        files: [{
          expand: true,
          src: ['pizza/pizza.png', 'pizza/pizzeria.jpg'],
          cwd: 'img',
          dest: 'dist/images/dist-pizza'
        }]
      }
    },
    pagespeed: {
      options: {
        nokey: true,
        url: "https://nano-degree-performance.herokuapp.com/dist/",
      },
      prod: {
        options: {
          url: "https://nano-degree-performance.herokuapp.com/dist/",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      },
      paths: {
        options: {
          paths: ["/", "/project-2048.html", "/project-webperf.html", "/project-mobile.html", "/pizza.html"],
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      }
    }
  });
  function compressCss(fileIn, fileOut) {
    console.log('compressing css');
    new Compressor.minify({
      type: 'yui-css',
      fileIn: fileIn,
      tempPath: './.tmp/',
      fileOut: './dist/css/' + fileOut,
      callback: function (err) {
        if (err) {
          console.log('YUI-CSS Something goes wrong: ' + err);
          return;
        }
        console.log('Compressed all in css.');
      }
    });
  }
  function getCommonCSS() {
    return ['./css/common/fonts.css',
            './css/common/styles.css',
            './css/common/print.css',
            './css/common/smartphones-media.css'];
  }
  grunt.registerTask('minify:css:common', function () {
    compressCss(getCommonCSS(), 'styles.css');
  });
  grunt.registerTask('minify:css:pizza', function () {
    var pizzaCSS = [];
    pizzaCSS.push('./css/bootstrap-grid.css');
    pizzaCSS.push('./css/pizza.css');
    compressCss(pizzaCSS, 'pizza.css');
  });
  function minifyJs(fileIn, fileOut) {
    console.log('compressing pizza.js to:', fileOut);
    new Compressor.minify({
      type: 'uglifyjs',
      fileIn: fileIn,
      tempPath: './.tmp/',
      fileOut: './dist/js/' + fileOut,
      callback: function (err) {
        if (err) {
          console.log('Uglifyjs Something goes wrong: ' + err);
          return;
        }
        console.log('Compressed all in js.');
      }
    });
  }
  grunt.registerTask('minify:js:pages', function () {
    minifyJs(['./js/pages.js'], 'app.js');
  });

  grunt.registerTask('minify:js:pizza', function () {
    minifyJs(['./vendors/jquery.min.js', './vendors/handlebars.min.js', './js/pizza.js'], 'pizza.js');
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'minify:css:common',
    'minify:css:pizza',
    'minify:js:pages',
    'minify:js:pizza',
    'responsive_images:pizza'
  ]);
};
