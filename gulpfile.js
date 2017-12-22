const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const importCss = require('postcss-import');
const browserSync = require('browser-sync').create();

gulp.task('default', function () {
  console.log('Default gulp task!');
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([importCss, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('injectCss', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('injectCss');
  });

  watch('./app/index.html', function () {
    browserSync.reload();
  });
});
