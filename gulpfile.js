var gulp         = require('gulp');
var gcmq         = require('gulp-group-css-media-queries');
var jade         = require('gulp-jade');
var sass         = require('gulp-sass');
var jshint       = require('gulp-jshint');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var minhtml      = require('gulp-minify-html');
var imagemin     = require('gulp-imagemin');
var minifycss    = require('gulp-minify-css');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var path =
{
    sass: {
        src: "src/sass/**/*.scss",
        dest: "dist/css"
    },

    js: {
        src: "src/js/**/*.js",
        dest: "dist/js"
    },

    img: {
        src: "src/img/**/*",
        dest: "dist/img"
    },

    jade: {
        src: "src/jade/**/*.jade",
        dest: "dist/html"
    }
}

// TASK: SASS
gulp.task('sass', function()
{
    return gulp.src(path.sass.src)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.sass.dest));
});

// TASK: JS
gulp.task('js', function()
{
    return gulp.src(path.js.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.js.dest));
});

// TASK: Jade
gulp.task('jade-compile', function()
{
    return gulp.src(path.jade.src)
        .pipe(jade())
        .pipe(gulp.dest(path.jade.dest));
});

// TASK: IMAGES
gulp.task('img-optimize', function()
{
    return gulp.src(path.img.src)
        .pipe(imagemin())
        .pipe(gulp.dest(path.img.dest));
});

/**
 * TASK: WATCH
 * Watches files and runs tasks on change
 */
gulp.task('watch', function()
{
    gulp.watch(path.sass.src, ['sass']);
    gulp.watch(path.js.src, ['js']);
    gulp.watch(path.jade.src, ['jade-compile']);
    gulp.watch(path.img.src, ['img-optimize']);
});

/**
 * TASK: BUILD
 * Useful for one-time compilation
 */
gulp.task('build', [
    'sass',
    'js',
    'img-optimize',
    'jade-compile'
]);
