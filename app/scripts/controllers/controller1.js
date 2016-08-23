//这里的define第一个参数传递的数组 其实就是需要使用的哪些对象 requirejs应该会给我们维护app.js返回的对象，并不是每次define(['app'])的时候都重新去生成app.js对象
//所以这里回调传入的app是第一次执行app.js 的对象
define(['app'],function(app){
	app.controller('controller1',['$scope',function($scope){ 
		    $scope.test = "this is route 1";
	}]);
})