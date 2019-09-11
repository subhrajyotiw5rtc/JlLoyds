var dept=angular.module('HLLOYD');
dept.controller('loginController',function($scope,$http,$state,$window,$location,DataService){
	$scope.signin=function(){
		if ($scope.username=='' || $scope.username==null) {
			alert('Please type the user name');
			return;
		}else if($scope.password=='' || $scope.password==null){
			alert('Please type the password');
			return;
		}else{
			var url1='/admin/signin';
		    var method='POST';
		    var userData={username:$scope.username,password:$scope.password};
		    DataService.connectToServerSideScript(method,url1,userData)
			.then(function(response) {
				if (response.status==200) {
					$location.path('dashboard');
				}else{
					alert(response.msg);
				}
			},function(error) {
			    
			})
		}
	}
})