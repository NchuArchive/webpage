const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')
const del = require('del')
const runSequence = require('run-sequence')
const $ = require('gulp-load-plugins')()
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

gulp.task('pug', () => {
  gulp.src(paths.src.pug)
    .pipe($.pug())
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', () => {
  gulp.src(paths.src.css)
    .pipe(gulp.dest(paths.dist.css))
})
gulp.task('less', () => {
  gulp.src(paths.src.less)
    .pipe($.less())
    .pipe(gulp.dest(paths.dist.css))
})

gulp.task('scripts', () => {
  gulp.src(paths.src.js)
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe($.uglify())
    .pipe(gulp.dest(paths.dist.js))
})
gulp.task('lib', () => {
  gulp.src(paths.src.lib)
    .pipe(gulp.dest(paths.dist.lib))
})

gulp.task('data', () => {
  gulp.src(paths.src.data)
    .pipe(gulp.dest(paths.dist.data))
})

gulp.task('images', () => {
  gulp.src(paths.src.images)
    .pipe($.imagemin())
    .pipe(gulp.dest(paths.dist.images))
})

// gh-pages
gulp.task('deploy', () => {
  return gulp.src('dist/**/*')
    .pipe(ghPages())
})
// Cleaning
gulp.task('clean', () => {
  return del(['dist/**/*'])
})

gulp.task('webserver', () => {
  gulp
    .src(paths.dist.html)
    .pipe($.webserver({
      port: 8080,
      livereload: true,
      directoryListing: false
    }))
})

gulp.task('watch', () => {
  gulp.watch(paths.src.pug, ['pug'])
  gulp.watch(paths.src.less, ['less'])
  gulp.watch(paths.src.js, ['scripts'])
})

gulp.task('default', ['webserver', 'watch'])
gulp.task('build', ['pug', 'css', 'less', 'scripts', 'lib', 'data'])
gulp.task('setup', () => {
  runSequence('clean', ['pug', 'css', 'less', 'scripts', 'lib', 'data', 'images'], 'deploy')
})
