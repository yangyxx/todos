(function (angular) {
	'use strict';
	var app=angular.module("todosapp",[]);
	app.controller('todosCon',['$scope', function ($scope) {
		$scope.data=[
			{id:1,name:'aa',completed:false},
			{id:2,name:'bb',completed:true},
			{id:3,name:'cc',completed:false},
			{id:4,name:'dd',completed:false},
			{id:5,name:'ee',completed:false}
		]
		//1.任务的展示
		//2. 添加任务
		$scope.news="";
		$scope.add= function () {
			if(!$scope.news){
				return;
			}
			$scope.data.push({id:Math.random(),name:$scope.news,completed:false})
			$scope.news="";
		}
		//3. 删除任务
		$scope.remov= function (id) {
			for(var i=0;i<$scope.data.length;i++){
				if($scope.data[i].id==id){
					$scope.data.splice(i,1);
				}
			}
		}
		//4. 修改任务内容
		$scope.dbclickid=-1;
		$scope.xiugai= function (id) {
			$scope.dbclickid=id;
		}
		$scope.gai= function () {
			$scope.dbclickid=-1;
		}
		//5. 切换任务完成与否的状态
		//6. 批量切换任务完成与否的状态
		$scope.checkall= function () {
			var num=0;
			for(var i=0;i<$scope.data.length;i++){
				if($scope.data[i].completed==true){
					num++;
				}
			}
			if(num==$scope.data.length){
				return true;
			}else{
				return false;
			}
		}
		$scope.allcheck= function () {
			var c=!$scope.checkall();
			for(var i=0;i<$scope.data.length;i++){
				$scope.data[i].completed=c;
			}
		}
		//7. 显示未完成的任务数
		$scope.notcomp= function () {
			var n=0;
			for(var i=0;i<$scope.data.length;i++){
				if(!$scope.data[i].completed){
					n++;
				}
			}
			return n;
		}
		//8. 清除所有已完成任务
		$scope.clearcomp= function () {
			for(var i=$scope.data.length-1;i>=0;i--){
				if($scope.data[i].completed){
					$scope.data.splice(i,1);
				}
			}
		}
		//9. 切换显示不同状态的任务
		$scope.f="";
		$scope.alls= function () {
			$scope.f="";
		}
		$scope.activ= function () {
			$scope.f=false;
		}
		$scope.compl= function () {
			$scope.f=true;
		}
	}])
})(angular);
