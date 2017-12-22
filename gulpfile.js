const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const importCss = require('postcss-import');

gulp.task('default', function () {
  console.log('Default gulp task!');
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([importCss, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('html', function () {
  console.log('Some html stuff.');
});

gulp.task('watch', function () {
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });

  watch('./app/index.html', function () {
    gulp.start('html');
  });
});
