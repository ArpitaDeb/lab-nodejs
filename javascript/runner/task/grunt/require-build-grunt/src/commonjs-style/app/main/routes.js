define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(

    // dependencies injection
    ['$routeProvider',

  // routes definition
  function ($routeProvider) {

    $routeProvider
      .when(
        '/',
        {
          controller: 'HomeCtrl',
          templateUrl: 'app/main/templates/home.html'
        }
      )
      .when(
        '/404',
        {
          templateUrl: 'app/main/templates/404.html'
        }
      )
      .otherwise({ redirectTo: '/404' });

  }]);

});
