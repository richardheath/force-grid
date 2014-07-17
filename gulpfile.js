var gulp = require('gulp');

var less = require("gulp-less");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");

gulp.task('build', function() {
  return gulp.src('./less/bootstrap/bootstrap.less')
        .pipe(less())
        .pipe(rename('bootstrap-force-grid.css'))
        .pipe(gulp.dest('./css'))
        .pipe(minifyCss())
        .pipe(rename('bootstrap-force-grid.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['build']);