var gulp=require("gulp"),concat=require("gulp-concat"),uglify=require("gulp-uglify");gulp.task("default",function(){gulp.src("*.js").pipe(concat("operaciones.js")).pipe(uglify()).pipe(gulp.dest("js"))});var restar=function(u,r){return u-r},sumar=function(u,r){return u+r};