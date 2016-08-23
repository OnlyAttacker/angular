//定义angularjs的定义并告诉它我们依赖的所有的控制器 服务 过滤器和指令
define(['angular','angularRoute'],function(angular){

	//配置路由可以这么写，最后 exports 出 app.js的对象  也就是最后return的对象
	var app = angular.module('app',['ngRoute']);
	app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
			//在这里定义路由
		    $locationProvider.html5Mode(true);                // 注意点 7 使用html5Mode 来去掉url上的#
		    $routeProvider.when("/views1", {                   // 注意点 8 定义路由规则
		        templateUrl: "/views/controller1/view1.html",            // 注意点 9 使用的html文件 放在/views/route1.html
		        controller: "controller1"                     // 注意点 10 使用的控制器 route1
		    }).when("/views2", {
		        templateUrl: "/views/controller2/view2.html",
		        controller: "controller2"
		    }).otherwise({
		        template: "404 Not Found"
		    });
		}]);
	return app;	//返回的这个app就是 包含app.js的 exports对象
});