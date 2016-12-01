angular.module('myApp', ['ui.router','searchModel'])
	.config(function ($locationProvider,$urlRouterProvider,$stateProvider) {
	  $locationProvider
	  .html5Mode({
	    enabled: true, 
	    requireBase: false
	  });

	  $urlRouterProvider
	  .when('/','/fuzzquery')
	  .otherwise('/fuzzquery')

	  $stateProvider
	  .state('fuzzquery',{
	    url:'/fuzzquery',
	    templateUrl:'views/test.html',
	    controller:'fuzzqueryCtrl'
	  })
	})
    .controller('fuzzqueryCtrl', function ($scope, $http) {
	    $scope.products = [
	        {name: '衣服', id: '01'},
	        {name: '衣架', id: '02'},
	        {name: '帽子', id: '03'},
	        {name: '鞋子', id: '04'},
	        {name: '床单', id: '05'},
	        {name: '被单', id: '06'},
	        {name: '被套', id: '07'}
	    ];
	})





    
   