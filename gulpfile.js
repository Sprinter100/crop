const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const livereload = require('gulp-livereload');

livereload({
    start: true
});

var liveReloader = function() {
    livereload.reload();
};

gulp.task('reload', function() {
    liveReloader();
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch([
        path.join(__dirname, 'static', '/*.html'),
        path.join(__dirname, 'static', '/*.css'),
        path.join(__dirname, 'static', '/*.js')
    ], ['reload']);
});