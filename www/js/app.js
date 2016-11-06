// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('TMApp', ['ionic'])

.run(function($ionicPlatform) {
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

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MainCtrl'
    })

    .state('app.tasks', {
        url: '/tasks',
        views: {
            'menuContent': {
                templateUrl: 'templates/tasks.html',
                controller: 'TasksCtrl'
            }
        }
    })

    .state('app.task', {
        url: "/tasks/:taskId",
        views: {
            'menuContent': {
                templateUrl: "templates/task.html",
                controller: 'TaskCtrl'
            }
        }
    })

    .state('app.new-task', {
        url: '/new-task',
        views: {
            'menuContent': {
                templateUrl: 'templates/add-task.html',
                controller: 'TaskCtrl'
            }
        }
    })

    .state('app.projects', {
        url: '/projects',
        views: {
            'menuContent': {
                templateUrl: 'templates/projects.html',
                controller: 'ProjectsCtrl'
            }
        }
    })

    .state('app.project', {
        url: "/projects/:projectId",
        views: {
            'menuContent': {
                templateUrl: "templates/project.html",
                controller: 'ProjectCtrl'
            }
        }
    })

    .state('app.new-project', {
        url: '/new-project',
        views: {
            'menuContent': {
                templateUrl: 'templates/add-project.html',
                controller: 'ProjectsCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/projects');
});