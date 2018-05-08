'use strict';

const gulp = require('gulp');
const typescript = require('gulp-typescript');
const del = require('del');
const gulpSequence = require('gulp-sequence');

gulp.task('copy', () => {
  return gulp.src(['src/node_modules/**/*'])
    .pipe(gulp.dest('functions/skill/node_modules'));
});

gulp.task('typescript', () => {
  const tsProject = typescript.createProject('tsconfig.json');
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('functions/skill'));
});

gulp.task('del', () => {
  return del(['functions/skill/**/*']);
});

gulp.task('default', gulpSequence('del', 'typescript', 'copy'));
