const gulp = require('gulp');
const ts = require('gulp-typescript');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const project = ts.createProject('tsconfig.gulp.json', {
  typescript: require('typescript')
});

gulp.task('watch', ['webpack', 'ts'], () => {
  gulp.watch(['typings/tsd.d.ts', 'src/**/*.{ts,tsx}'], ['webpack']);
  gulp.watch(['typings/tsd.d.ts', 'src/components/**/*.tsx'], ['ts']);
});

gulp.task('ts', () =>
  gulp.src(['typings/tsd.d.ts', 'src/components/**/*.tsx'])
    .pipe(ts(project))
    .js.pipe(gulp.dest('lib/components')));

gulp.task('webpack', done => {
  webpack(webpackConfig).run(function(err, stats) {
    if(err) {
      throw err;
    } else {
      done();
    }
  });
});

gulp.task('default', ['webpack', 'ts']);
