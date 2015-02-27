var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
  gulp.src('./sass/base.scss')
  .pipe(sass({
    onError: function(error){
      console.error(error.message);
    },
    outputStyle: 'nested'

  }))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(['sass/**/*.scss'], ['sass']);
});


gulp.task('default', ['sass', 'watch']);
