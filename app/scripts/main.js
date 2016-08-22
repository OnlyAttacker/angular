//在这里定义requirejs的配置
require.config({
	paths:{
		angular:'../vendor/angularjs/angular.min',
		angularRoute:'../vendor/angularjs/angular-route.min',
		jquery:'../vendor/jquery-3.1.0/jquery-3.1.0.min',
		domReady:'../vendor/requirejs/domReady',
		// twitter:'vendor/bootstrap'
	},
	shim:{
		// 'twitter/js/bootstrap':{
		// 	deps:['jquery/jquery-3.1.0.min']
		// },
		'angular':{
			deps:['jquery'],
			exports:'angular'
		},
		angularRoute:{
			deps:['angular']
		}
	}
});

require([
	'app',
	'bootstrap',//这里是angularjs的bootstrap
	'controllers/mainControllers',
	// 'services/searchSerives',
	// 'directives/ngbkFocus',
	//所创建的所有控制器、服务、指令及过滤器文件都必须写
	//到这里，这块内容必须手动维护
	],
	function(angular,app){
		'use strict';
		app.config(['$routeProvider',function($routeProvider){
			//在这里定义路由
		}
	]);
});