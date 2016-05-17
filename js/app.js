var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/movie/:userInput', {
      templateUrl: '/partials/list.html',
      controller: 'MovieController'
    })
    .when('/movie/:movieID/individual', {
      templateUrl: '/partials/movie.html',
      controller: 'SingleController'
    })
  $locationProvider.html5Mode(true);
})
