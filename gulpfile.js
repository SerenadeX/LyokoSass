var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
  gulp.src('./sass/base.scss')
  .pipe(sass())
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(['sass/**/*.scss'], ['sass']);
});


gulp.task('default', ['sass', 'watch']);