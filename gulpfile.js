const gulp = require('gulp')
const jsmin = require('gulp-jsmin')
const rename = require('gulp-rename')
gulp.task('default',()=>{
    gulp.src('client/VideoDiv.js').pipe(jsmin()).pipe(rename('video.div.min.js')).pipe(gulp.dest('dist')).pipe(gulp.dest('client')).pipe(gulp.dest('public'))
})
