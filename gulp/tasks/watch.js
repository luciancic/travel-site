const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();


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

  watch('./app/assets/scripts/**/*.js', function () {
    gulp.start('scripts');
    browserSync.reload();
  })

  watch('./app/index.html', function () {
    browserSync.reload();
  });
});
