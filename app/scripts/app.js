//定义angularjs的定义并告诉它我们依赖的所有的控制器 服务 过滤器和指令

define(['angular','angularRoute','controllers/mainControllers','filters/datetime_format'],function(angular){
	return angular.module('myApp',['ngRoute','controllers','filters']);
});