/*
 *  Copyright (C) 2016, Alphabet International GmbH
 */

// Create fallback.lang.json
var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpSequence = require('gulp-sequence');
const ngApimock = require('ng-apimock')();
const express = require('express');

gulp.task('proxy', gulpSequence('generate-mocks', 'mocks-connect'));

// If you call this directly, no mocks will be found!
gulp.task('generate-mocks', (done) => {
  ngApimock.run({
    src: "api-mock",
    outputDir: ".tmp/mocking",
    done: () => {
      done();
    }
  });

  watch('api-mock', () => {
    var deferred = Promise.defer();
    ngApimock.run({
      src: "api-mock",
      outputDir: ".tmp/mocking",
      done: () => {
        deferred.resolve()
      }
    });
    return deferred.promise;
  })
});

gulp.task('mocks-connect', () => {
  var connect = require('gulp-connect');
  var serveStatic = require('serve-static');
  connect.server({
    root: "dist",
    port: process.env['WEBPACK_DEV_SERVER_PORT'] || 4002,
    fallback: 'dist/accounting/index.html',
    middleware: function(connect, opt) {
      const app = connect();
      return [
        (require('ng-apimock/lib/utils').ngApimockRequest),
        app.use('/mocking', serveStatic('.tmp/mocking')),
        app.use('/', express.static('dist')),
      ]
    }
  });
});
