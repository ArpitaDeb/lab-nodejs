(function() {
  'use strict';

  require.config({

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        'bower_components/jquery/dist/jquery.min'
      ],

      angular: [
        'bower_components/angular/angular.min'
      ],

      angularRoute: [
        'bower_components/angular-route/angular-route.min'
      ],

      angularResource: [
        'bower_components/angular-resource/angular-resource.min'
      ],

      angularMocks: [
        'bower_components/angular-mocks/angular-mocks'
      ]

    },

    // define js scripts dependencies
    shim: {

      'jquery': {
        exports: 'jquery'
      },

      'angular': {
        exports: 'angular',
        deps: ['jquery']
      },

      'angularRoute': {
        deps: ['angular']
      },

      'angularResource': {
        deps: ['angular']
      },

      'angularMocks': {
        deps: ['angular']
      }

    },

    priority: [
      'angular'
    ],

    deps: ['./ng.app'],

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log('go go go...');
  }

})();
