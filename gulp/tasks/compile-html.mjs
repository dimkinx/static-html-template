/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlbeautify from 'gulp-html-beautify';
import path from '../config/path.mjs';

const compileHtml = () => gulp
  .src(path.source.html)
  .pipe(
    fileinclude({
      prefix: '@@',
      basepath: '@root',
      context: {
        // глобальные переменные для include
        test: 'text',
      },
    }),
  )
  .pipe(
    htmlbeautify({
      indent_size: 2,
      preserve_newlines: true,
      max_preserve_newlines: 0,
      wrap_attributes: 'auto',
    }),
  )
  .pipe(gulp.dest('build'));

export default compileHtml;
