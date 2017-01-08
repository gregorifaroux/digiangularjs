/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="../typings/globals/angular-material/index.d.ts"/>
/// <reference path="../typings/globals/angular-ui-router/index.d.ts"/>

module app {
  'use strict';
  console.log('app.ts ... started!');
  angular.module('digiangularjs', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    'digiangularjs.home',
    'digiangularjs.page1',
    'digiangularjs.page2',
  ])
    .config(config)
    ;

  config.$inject = [
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$mdThemingProvider'
  ];

  function config($locationProvider: ng.ILocationProvider,
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider,
    $mdThemingProvider: angular.material.IThemingProvider
  ) {
    //change default color for primary/*
    var indigo = $mdThemingProvider.extendPalette('indigo', {
      '500': '569fd4'
    });
    $mdThemingProvider.definePalette('indigo', indigo);

    //change default color for warn
    indigo = $mdThemingProvider.extendPalette('red', {
      '500': 'ff5800'
    });
    $mdThemingProvider.definePalette('red', indigo);

    $mdThemingProvider.theme('default').primaryPalette('indigo').warnPalette('red');

    //here you change placeholder/foreground color.
    $mdThemingProvider.theme('default').foregroundPalette[3] = "rgba(0,0,0,0.67)";


    //html5 removes the need for # in URL
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $urlRouterProvider.otherwise('/');

    //angular-ui-router for multiple views
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'components/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm',
      })
      .state('home.reports', {
        url: '/reports/',
        templateUrl: 'components/reports/reports.html'
      })
      .state('home.page1', {
        url: '/page1/',
        templateUrl: 'components/page1/page1.html'
      })
      .state('home.page2', {
        url: '/page2/',
        templateUrl: 'components/page2/page2.html'
      })
      ;
    //more states here.
  }
}
