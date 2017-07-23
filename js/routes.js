angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html'
    })
        .state('capital', {
      url: '/side-menu21',
      templateUrl: 'templates/capital.html'
    })
        .state('capital.dashboard', {
      url: '/page4',
      views: {
        'side-menu21': {
          templateUrl: 'templates/dashboard.html'
        }
      }
    })
        .state('tabsController.citas', {
      url: '/page5',
      views: {
        'tab1': {
          templateUrl: 'templates/citas.html'
        }
      }
    })
        .state('capital.reporte', {
      url: '/page6',
      views: {
        'side-menu21': {
          templateUrl: 'templates/reporte.html'
        }
      }
    })
        .state('capital.miPerfil', {
      url: '/page11',
      views: {
        'side-menu21': {
          templateUrl: 'templates/miPerfil.html'
        }
      }
    })
        .state('nuevaCita', {
      url: '/page12',
      templateUrl: 'templates/nuevaCita.html'
    })
        .state('citas2', {
      url: '/page7',
      templateUrl: 'templates/citas2.html'
    })
        .state('tabsController.pOS', {
      url: '/page8',
      views: {
        'tab4': {
          templateUrl: 'templates/pOS.html'
        }
      }
    })
        .state('intro', {
      url: '/page9',
      templateUrl: 'templates/intro.html'
    })
        .state('tabsController', {
      url: '/page15',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
        .state('tabsController.seguimiento', {
      url: '/page10',
      views: {
        'tab3': {
          templateUrl: 'templates/seguimiento.html'
        }
      }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page9');


});