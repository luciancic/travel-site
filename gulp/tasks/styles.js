const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const importCss = require('postcss-import');

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([importCss, cssvars, nested, autoprefixer]))
    .on('error', function (error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
