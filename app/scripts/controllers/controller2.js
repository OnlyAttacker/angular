//这里的define第一个参数传递的数组 其实就是需要使用的哪些对象
define(['app'],function(app){
	app.controller('controller2',['$scope',function($scope){ 
		    $scope.test = "this is route 2";
	}]);
})