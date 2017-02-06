var fs           = require('fs')
var gulp         = require('gulp')
var path         = require('path')
var sass         = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps   = require('gulp-sourcemaps')
var cleanCSS     = require('gulp-clean-css')
var rename       = require('gulp-rename')
var concat       = require('gulp-concat')
var uglify       = require('gulp-uglify')
var connect      = require('gulp-connect')
var open         = require('gulp-open')
var babel        = require('gulp-babel')
var replace      = require('gulp-replace')
var wrapper      = require('gulp-wrapper')
const browserSync = require('browser-sync').create();
const child = require('child_process');
const gutil = require('gulp-util');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var Paths = {
  HERE                 : './',
  DIST                 : 'assets',
  DIST_TOOLKIT_JS      : 'assets/toolkit.js',
  SCSS_TOOLKIT_SOURCES : './scss/site.scss',
  SCSS                 : './scss/**/**',
  ICONS                : './icons/SVG/*',
  DIST_ICON_SCSS       : '../../scss/custom/zoeicons.scss',
  DIST_ICON_FONT       : 'assets/fonts/',
  DIST_ICON_FONT_URL   : 'fonts/',
  DIST_ICON_FONT_NAME  : 'zoeicons',
  JS                   : [
      "./js/vendor/tether.min.js",
      "./js/bootstrap/util.js",
      "./js/bootstrap/alert.js",
      "./js/bootstrap/button.js",
      "./js/bootstrap/carousel.js",
      "./js/bootstrap/collapse.js",
      "./js/bootstrap/dropdown.js",
      "./js/bootstrap/modal.js",
      "./js/bootstrap/tooltip.js",
      "./js/bootstrap/popover.js",
      "./js/bootstrap/scrollspy.js",
      "./js/bootstrap/tab.js",
      './js/custom/*'
    ],
  SITE_ROOT       : "_site",
}

gulp.task('iconfont', function(){
  return gulp.src(Paths.ICONS)
    .pipe(iconfontCss({
      fontName: Paths.DIST_ICON_FONT_NAME,
      path: 'scss',
      targetPath: Paths.DIST_ICON_SCSS,
      fontPath: Paths.DIST_ICON_FONT_URL,
      cssClass: Paths.DIST_ICON_FONT_NAME,
    }))
    .pipe(iconfont({
      fontName: Paths.DIST_ICON_FONT_NAME,
      //normalize: true,
      log: gutil.log,
     }))
    .pipe(gulp.dest(Paths.DIST_ICON_FONT));
});


gulp.task('scss', function () {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('scss-min', ['scss'], function () {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('js', function () {
  return gulp.src(Paths.JS)
    .pipe(concat('toolkit.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel({
        "compact" : false,
        "presets": [
          [
            "es2015",
            {
              "modules": false,
              "loose": true
            }
          ]
        ],
        "plugins": [
          "transform-es2015-modules-strip"
        ]
      }
    ))
    .pipe(wrapper({
       header: "+ function () {\n",
       footer: '\n}();\n'
    }))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('js-min', ['js'], function () {
  return gulp.src(Paths.DIST_TOOLKIT_JS)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [Paths.SITE_ROOT + '/**'],
    port: 4000,
    server: {
      baseDir: Paths.SITE_ROOT
    }
  });

  gulp.watch(Paths.SCSS, ['scss']);
  gulp.watch(Paths.JS, ['js']);
});

gulp.task('dev', ['js', 'scss', 'iconfont', 'jekyll', 'serve'])
