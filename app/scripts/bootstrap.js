//等待dom结构准备好 使用requirejs的插件domReady 然后告诉angularjs一切准备就绪，可以开始运行了

define(['angular','domReady'],function(angular,domReady){
	domReady(function(){
		angular.bootstrap(document,['myApp']);
	});
});