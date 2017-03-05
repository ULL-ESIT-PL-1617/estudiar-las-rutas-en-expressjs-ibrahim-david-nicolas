//Gulpfile que coge los archivos javascripts que se encuentran en el directorio y
//los concatena y minimiza. Guarda el resultado en el directorio js

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('default', function () {
    gulp.src('*.js')
    .pipe(concat('operaciones.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});