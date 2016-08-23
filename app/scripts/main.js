//在这里定义requirejs的配置
require.config({
	paths:{
		app:'app',
		bootstrap:'bootstrap',
		angular:'../vendor/angularjs/angular.min',
		angularRoute:'../vendor/angularjs/angular-route.min',
		jquery:'../vendor/jquery-3.1.0/jquery-3.1.0.min',
		domReady:'../vendor/requirejs/domReady',
	},
	shim:{
		'angular':{
			deps:['jquery'],
			exports:'angular'
		},
		angularRoute:{
			deps:['angular']
		},
		'bootstrap':{	//先声明app.js文件中 return angular.module('app',['ngRoute']),这个 app 然后在bootstrap angular.bootstrap(document,['app']);
			deps:['app']
		}
	}
});

//require([],callback)第一个参数（数组类型）传入的是需要加载的文件，第二个参数（函数的回调函数）
//回调函数参数顺序跟require第一个数组的顺序一样，回调函数中传回的值，是第一个参数中return回的值,如果文件中不定义函数返回值，则传入undefined
require([
	'domReady',
	'app',	//ng-app创建后再声明 app
	'bootstrap',//这里是angularjs的bootstrap 先引导创建ng-app 
	'controllers/controller2',	//在这里面我是直接增加app的controller 而不是define()然后传回这个controller
	'controllers/controller1',	//在这里面增加app的controller
	// 'services/searchSerives',
	// 'directives/ngbkFocus',
	//所创建的所有控制器、服务、指令及过滤器文件都必须写
	//到这里，这块内容必须手动维护
	],function(domReady,app,b,c,d){	//这里的回传参数是按照require()第一个数组参数传入的顺序传入的，但是不们不应该在这里修改返回的内容 修改也没有效果
		//在这里修改app.config时对app没有影响所以应该在define中对app进行修改
	}
);
// 在这里修改时对app产生了影响 这里的define()第一个参数  其实是使用app(app.js中返回的对象)
// define(['app'],function(app){
// 	app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
// 			//在这里定义路由
// 		    $locationProvider.html5Mode(true);                // 注意点 7 使用html5Mode 来去掉url上的#
// 		    $routeProvider.when("/views1", {                   // 注意点 8 定义路由规则
// 		        templateUrl: "/views/controller1/view1.html",            // 注意点 9 使用的html文件 放在/views/route1.html
// 		        controller: "controller1"                     // 注意点 10 使用的控制器 route1
// 		    }).when("/views2", {
// 		        templateUrl: "/views/controller2/view2.html",
// 		        controller: "controller2"
// 		    }).otherwise({
// 		        template: "404 Not Found"
// 		    });
// 		}]);
// })