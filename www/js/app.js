// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ayya1008', ['ionic', 'ayya1008.controllers', 'ngCordova', 'ayya1008.services', 'uiGmapgoogle-maps'])

.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, uiGmapGoogleMapApiProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.temples', {
    url: '/temples/:templeType',
    views: {
      'menuContent': {
        templateUrl: 'templates/temples.html',
        controller: 'TemplesCtrl'
      }
    }
  })

  .state('app.temple', {
    url: '/:templeId/temple',
    views: {
      'menuContent': {
        templateUrl: 'templates/temple.html',
        controller: 'TempleCtrl'
      }
    }
  })

  .state('app.testimonies', {
    url: '/testimonies',
    views: {
      'menuContent': {
        templateUrl: 'templates/testimonies.html',
        controller: 'TestimoniesCtrl'
      }
    }
  })

  .state('app.testimony', {
    url: '/testimony/:testimonyId',
    views: {
      'menuContent': {
        templateUrl: 'templates/testimony.html',
        controller: 'TestimonyCtrl'
      }
    }
  })

  .state('app.uchipadipu', {
    url: '/uchipadipu',
    views: {
      'menuContent': {
        templateUrl: 'templates/uchipadipu.html'
      }
    }
  })

  .state('app.ugapadipu', {
    url: '/ugapadipu',
    views: {
      'menuContent': {
        templateUrl: 'templates/ugapadipu.html'
      }
    }
  })

  .state('app.events', {
    url: '/events',
    views: {
      'menuContent': {
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html'
      }
    }
  })

  .state('app.wip', {
    url: '/wip',
    views: {
      'menuContent': {
        templateUrl: 'templates/wip.html'
      }
    }
  });

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCmU_GnOsVq-wNbisGQuxB_6l9e4ZF42N4',
    v: '3.22'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/temples/pathi');
  $ionicConfigProvider.tabs.position('bottom');
});