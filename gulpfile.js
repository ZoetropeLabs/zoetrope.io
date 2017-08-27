const fs           = require('fs')
const gulp         = require('gulp')
const path         = require('path')
const sass         = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps   = require('gulp-sourcemaps')
const cleanCSS     = require('gulp-clean-css')
const rename       = require('gulp-rename')
const concat       = require('gulp-concat')
const uglify       = require('gulp-uglify')
const connect      = require('gulp-connect')
const open         = require('gulp-open')
const babel        = require('gulp-babel')
const replace      = require('gulp-replace')
const wrapper      = require('gulp-wrapper')
const browserSync = require('browser-sync').create();
const child = require('child_process');
const gutil = require('gulp-util');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const imagemin = require('gulp-imagemin');

const Paths = {
  HERE                 : './',
  DIST                 : 'assets',
  DIST_TOOLKIT_JS      : 'assets/toolkit.js',
  SCSS_TOOLKIT_SOURCES : './scss/site.scss',
  SCSS                 : './scss/**/**',
  ICONS                : './icons/SVG/*',
  FONTS                : './fonts/*',
  DIST_ICON_SCSS       : '../../scss/custom/zoeicons.scss',
  DIST_ICON_FONT       : 'assets/fonts/',
  DIST_ICON_FONT_URL   : 'fonts/',
  DIST_ICON_FONT_NAME  : 'zoeicons',
  JS                   : [
      "./js/vendor/jquery-3.2.1.min.js",
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
  IMG_SRC               : "images/**",
  SITE_ROOT             : "_site",
}

// SCP/Rsync settings for deploing the live site
const DEPLOY_SETTINGS = {
  host: 'staging.zoetrope.io',
  user: 'ben',
  port: 2223,
  path: '~/Sites/zconnect.io'
}

gulp.task('img', () => {
  gulp.src(Paths.IMG_SRC)
    .pipe(imagemin([imagemin.jpegtran({progressive: true})]))
    .pipe(gulp.dest('assets/img'))
})

gulp.task('fonts', () => {
  return gulp.src(Paths.FONTS)
        .pipe(gulp.dest(Paths.DIST_ICON_FONT));
})

gulp.task('iconfont', () => {
  return gulp.src(Paths.ICONS)
    .pipe(iconfontCss({
      fontName: Paths.DIST_ICON_FONT_NAME,
      path: 'scss',
      targetPath: Paths.DIST_ICON_SCSS,
      fontPath: Paths.DIST_ICON_FONT_URL,
      cssClass: Paths.DIST_ICON_FONT_NAME,
    }))
    .pipe(iconfont({
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      fontName: Paths.DIST_ICON_FONT_NAME,
      //normalize: true,
      log: gutil.log,
     }))
    .pipe(gulp.dest(Paths.DIST_ICON_FONT));
});


gulp.task('scss', () => {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('scss-min', ['scss'], () => {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(autoprefixer())
    //.pipe(rename({
    //  suffix: '.min'
    //}))
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('js', () => {
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

gulp.task('js-min', ['js'], () => {
  return gulp.src(Paths.DIST_TOOLKIT_JS)
    .pipe(uglify())
    //.pipe(rename({
    //  suffix: '.min'
    //}))
    .pipe(gulp.dest(Paths.DIST))
})

gulp.task('jekyll', ['build'], () => {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build',
    '--watch',
    '--verbose',
    '--trace',
    //'--incremental',
    //'--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('jekyll-compile', ['build-min'], cb => {

  // Set up env for jeykll production build
  var env = Object.create( process.env );
  env.JEKYLL_ENV = 'production';

  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build'], {env: env, shell: true});

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.on('error', function( err ){ throw err })
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  jekyll.on('exit', function(code) {
        cb(code === 0 ? null :'ERROR: Jekyll process exited with code: '+code);
    });
});


gulp.task('serve', () => {
  browserSync.init({
    files: [Paths.SITE_ROOT + '/**'],
    port: 4000,
    server: {
      baseDir: Paths.SITE_ROOT,
      serveStaticOptions: {
        extensions: ["html"]
      }
    }
  });

  gulp.watch(Paths.SCSS, ['scss']);
  gulp.watch(Paths.JS, ['js']);
  //gulp.watch(Paths.IMG_SRC, ['img']);
  //gulp.watch(Paths.FONTS, ['fonts', 'iconfont'])
});

gulp.task('deploy', ['jekyll-compile'], cb => {

  const settings = DEPLOY_SETTINGS;

  const scp = child.spawn('rsync', ['-rz', '--progress',
                           Paths.SITE_ROOT + '/', settings.user+'@'+settings.host+':'+settings.path]);

  const scplog = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('scp: ' + message));
  };

  scp.stdout.on('data', scplog);
  scp.stderr.on('data', scplog);
  scp.on('exit', function(code) {
      cb(code === 0 ? null :'ERROR: SCP process exited with code: '+code);
  });
});


// Helper tasks
gulp.task('build', ['js', 'scss', 'iconfont', 'img', 'fonts'])
gulp.task('build-min', ['js-min', 'scss-min', 'iconfont', 'img', 'fonts'])
gulp.task('dev', ['jekyll' ,'serve'])
