//等待dom结构准备好 使用requirejs的插件domReady 然后告诉angularjs一切准备就绪，可以开始运行了
//这里引导的'app'也就是app.js中angular.module('app',['ngRoute']);这一行的app module。这个语句中的'app'名字 后面在引导这个'app'执行

define(['angular','domReady'],function(angular,domReady){
	domReady(function(){
		angular.bootstrap(document,['app']);	//引导这个app执行 因为html标签中没有声明ng-app，所以这里必须引导app执行
	});
});