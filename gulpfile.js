const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const cssNano = require('gulp-cssnano');
const twig = require('gulp-twig');
const critical = require('critical');

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('views', () =>
  gulp.src('./src/views/*')
    .pipe(twig())
    .pipe(gulp.dest('./dist'))
);

gulp.task('styles', () =>
  gulp.src('./src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssNano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('prod-styles', () =>
  gulp.src('./src/scss/style.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('images', () =>
  gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
);

gulp.task('js', () =>
  gulp.src('./src/js/*')
    .pipe(babel({
        presets: ['env']
      }))
    .pipe(gulp.dest('./dist/js'))
);

gulp.task('pdf', () =>
  gulp.src('./src/pdf/*')
    .pipe(gulp.dest('./dist/pdf'))
);

gulp.task('favicons', () =>
  gulp.src('./src/favicons/*')
    .pipe(gulp.dest('./dist'))
);

// gulp.task('critical', ['netlify'], function (cb) {
//     critical.generate({
//         inline: true,
//         base: 'dist/',
//         src: 'index.html',
//         dest: 'index.html',
//         minify: true,
//         width: 320,
//         height: 480
//     });
// });

gulp.task('watch', function() {
  return gulp
    .watch("./src/**/*.*", ['views', 'styles', 'images', 'js', 'pdf'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['views', 'styles', 'images', 'js', 'pdf', 'favicons', 'watch']);
gulp.task('netlify', ['views', 'prod-styles', 'images', 'js', 'pdf', 'favicons']);