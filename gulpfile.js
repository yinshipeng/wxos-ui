'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cssmin = require('gulp-cssmin')

gulp.task('compile', function () {
    return gulp.src('./lib/*.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./theme'))
})

gulp.task('watch', function () {
    gulp.watch('./lib/**.scss', ['compile'])
})

gulp.task('default', ['compile', 'watch'])
