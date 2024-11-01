const { gulp, src, dest, series, parallel } = require('gulp')
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del')
const runSequence = require('run-sequence')
const $ = require('gulp-load-plugins')()
const browserSync = require('browser-sync').create();
const paths = {
  src: {
    less: './src/style/less/*.less',
    css: './src/style/css/*.css',
    js: './src/js/*.js',
    lib: './src/js/lib/*.js',
    pug: './src/pug/*.pug',
    data: './src/data/**',
    images: './src/img/**'
  },
  dist: {
    html: './dist',
    css: './dist/style',
    js: './dist/js',
    lib: './dist/js/lib/',
    data: './dist/data',
    images: './dist/img'
  }
}

function pug () {
  return src(paths.src.pug)
    .pipe($.pug())
    .pipe(dest('./dist'))
}

function css () {
  return src(paths.src.css)
    .pipe($.cleanCss({ compatibility: '*'}))
    .pipe(dest(paths.dist.css))
}

function less (done) {
  return src(paths.src.less)
    .pipe($.less())
    .pipe($.cleanCss({ compatibility: '*'}))
    .pipe(dest(paths.dist.css))
    done();
}

function scripts (done) {
  return src(paths.src.js)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(dest(paths.dist.js))
    done();
}

function lib () {
  return src(paths.src.lib)
    .pipe($.uglify())
    .pipe(dest(paths.dist.lib))
}

function data () {
  return src(paths.src.data)
    .pipe(dest(paths.dist.data))
}

function images () {
  return src(paths.src.images)
    .pipe($.imagemin())
    .pipe(dest(paths.dist.images))
}

// Cleaning
function clean () {
  return del(['dist/**/*'])
}

function serve () {
  browserSync.init({
    server: {
      baseDir: paths.dist.html
    }
  });
}

function watch () {
  gulp.watch(paths.src.pug, ['pug'])
  gulp.watch(paths.src.less, ['less'])
  gulp.watch(paths.src.css, ['css'])
  gulp.watch(paths.src.js, ['scripts'])
  gulp.watch(paths.src.data, ['data'])
}

exports.default = series(serve, watch)
exports.build = parallel(pug, css, less, scripts, lib, data)
