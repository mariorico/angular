var app = angular.module("computer",['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/',{
      templateURL : 'views/main.html',
      controller: 'MainCtrl'
    }).
    when('/about',{
      templateURL : 'about.html'
    }).
    when('/services',{
      templateURL : 'services.html',
      controller: 'ServiceCtrl'
    }).
    when('/contact',{
      templateURL : 'contact.html',
      controller: 'ContactCtrl'
    }).
    otherwise({redirectTo:'/'});
}])
.controller('MainCtrl',['$scope',function($scope){

}]).
controller('ServiceCtrl',['$scope','$http',function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data
  });
}]).
controller('ContactCtrl',['$scope',function($scope){

}]);
