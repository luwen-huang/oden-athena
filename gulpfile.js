const path = require('path')
const fs = require('fs')

const gulp = require('gulp');
const clean = require('gulp-clean');
const gulpCopy = require('gulp-copy');
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const autoprefixer = require('autoprefixer')
const postcssModules = require('postcss-modules')({
  getJSON: function(cssFileName, json, outputFileName) {
    let cssName       = path.basename(cssFileName, '.css');
    let jsonFileName  = './dist/json/' + cssName + '.json';
    fs.writeFileSync(jsonFileName, JSON.stringify(json), {flag: 'w+'});
  },
  generateScopedName: 'oden-athena__[local]',
})

// Clean old builds
function clear() {
  return gulp.src('./dist', {read: false})
    .pipe(clean())
}

// Build directory structure
function directories() {
  return gulp.src('./src/**/*', {read: false})
    .pipe(gulp.dest('./dist/json'))
}


// CSS task runner
//    1. build SCSS into CSS
//    2. autoprefixer adds browser-compatibility by autoprefixing browser names
//    3. 'oden-athena' onto every class
function css() {

  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe( postcss([autoprefixer, postcssModules]) )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
}

function copy() {
  return gulp.src('./src/**/*.scss')
    .pipe(gulpCopy('./dist/scss/', {prefix: 1}))
}



// exports.css = css;
exports.default = gulp.series(clear, directories, css, copy);
