var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();

gulp.task('default', ['html', 'js', 'css', 'img']);

gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('img', function () {
    return gulp.src('img/*')
        .pipe(gulp.dest('./public/img'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('./scss/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./js/*.js', browserSync.reload); 
});

// gulp.task('watch', function () {
//     gulp.watch('./*.html', ['html']);
//     gulp.watch('./scss/*.scss', ['css']);
//     gulp.watch('./js/*.js', ['js']);
//     gulp.watch('./js/*/*.js', ['js']);
// });
