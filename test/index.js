'use strict';

// Make sure both 'angular' and 'angular-mocks' are loaded up. Notice that
// we have to explicitly require the 'angular-mocks.js' file instead of the
// 'index.js' file, you can check that file and see what might be the problem.
require('angular');
require('angular-mocks/angular-mocks');

// Make sure we have required the actual application before attempting any
// 'angular.mock.module' shenanigans...
require('../src/app');
