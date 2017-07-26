var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var paths = {
  src: {
    less: './src/style/less/*.less',
    css: './src/style/css/*.css',
    js: './src/js/*.js',
    pug: './src/pug/*.pug',
    data: './src/data/**',
    images: './src/img/**'
  },
  dist: {
    html: './dist',
    css: './dist/style',
    js: './dist/js',
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
    // .pipe($.uglify())
    .pipe(gulp.dest(paths.dist.js))
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
gulp.task('build', ['pug', 'css', 'less', 'scripts', 'data'])
gulp.task('setup', ['pug', 'css', 'less', 'scripts', 'data', 'images', 'deploy'])
