const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	//.pipe(cssnano())
	.pipe(rename({"suffix":""}))
	.pipe(gulp.dest('./src/gulpcss'))
})
gulp.task('img',()=>{
	gulp.src('./src/img/*.*')
	.pipe(imagemin())
	.pipe(rename({"suffix":""}))
	.pipe(gulp.dest('./src/gulpimg'))
})
gulp.task("js",()=>{
	gulp.src('./src/js/*.js')
	.pipe(rename({"suffix":""}))
	.pipe(uglify())
	//.pipe(rename({"suffix":".js"}))
	.pipe(gulp.dest('./src/gulpjs'))
})
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass'])
	gulp.watch('./src/img/img/*.*',['img'])
	gulp.watch('./src/js/*.js',['js'])
})

