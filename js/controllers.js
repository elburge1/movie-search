app.controller('HomeController', function($scope, $http, $location){

  $scope.view = {};
  $scope.view.success = false;
  $scope.view.search = '';

  $scope.view.makeUrl = function() {
    $location.path('/movie/' + $scope.view.search)
  }
})

app.controller('MovieController', MovieController);

function MovieController($scope, $http, $routeParams, $location) {
  $scope.view = {};
  $scope.view.identity = '';

  $http.get('http://www.omdbapi.com/?s=' + $routeParams.userInput).then(function(result){
    console.log('http://www.omdbapi.com/?s=' + $routeParams.userInput)
    console.log(result.data.Search)
    $scope.view.movies = result.data.Search;
  })
  $scope.view.singleMovie = function(){
    $scope.view.identity = this.imdbID;
    $location.path('/movie/' + $scope.view.search + '/individual');
  }
}

app.controller('SingleController', SingleController);

function SingleController($scope, $http, $routeParams, $location) {
  $scope.view = {};

  $http.get('http://www.omdbapi.com/?i=' + $routeParams.movieID).then(function(stuff){
    console.log(stuff.data);
    $scope.view.single = stuff.data;
  })
}
