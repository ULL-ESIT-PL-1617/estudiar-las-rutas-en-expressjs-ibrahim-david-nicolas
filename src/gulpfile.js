var gulp = require('gulp');

gulp.task('routes', function() {
    console.log('Hello from routes tasks');
    var exec = require('child_process').exec;
    var proc = exec("node 2.js", function() {
    });
})

gulp.task('express', function() {
    console.log('Hello from express tasks')
    var exec = require('child_process').exec;
    var proc = exec("node 3.js", function() {
    });
})

gulp.task('API', function() {
    console.log('Hello from API tasks')
    var exec = require('child_process').exec;
    var proc = exec("node 4.js", function() {
    });
});