gulp = require('gulp')
$ = require('gulp-load-plugins')()

gulp.task 'default', ->
 gulp.src 'public/stylesheets/scss/*.scss'
 
 .pipe $.sass()
 .pipe gulp.dest 'public/stylesheets/'