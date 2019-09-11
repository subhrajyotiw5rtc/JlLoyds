var dept=angular.module('HLLOYD');
dept.controller('dashboardController',function($scope,$http,$state,$window,DataService){
	$scope.minDate = new Date().toDateString();
	$scope.IsEmail=function(txtMobId) {
        //console.log('mob',txtMobId);
        var mob = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (mob.test(txtMobId) == false) {
            //alert("Please enter valid mobile number.");
            return false;
        }
        return true;
    }
	$scope.addCompanyInfo=function(){
		if ($scope.firstName=='' || $scope.firstName==null) {
			alert('Please enter the first name.');
			return;
		}else if($scope.lastName=='' || $scope.lastName==null){
			alert('Please enter the last name.');
			return;
		}else if($scope.email=='' || $scope.email==null){
			alert('Please enter the Email.');
			return;
		}else if(($scope.email!='' && $scope.email!=undefined) && !$scope.IsEmail($scope.email)){
            alert('Please enter valid email id');
            return;
        }else if($scope.cname=='' || $scope.cname==null){
			alert('Please enter the Company Name.');
			return;
		}else if($scope.sDate=='' || $scope.sDate==null){
			alert('Please enter the License start date.');
			return;
		}else if($scope.eDate=='' || $scope.eDate==null){
			alert('Please enter the License end date.');
			return;
		}else{
			console.log('date',$scope.eDate);
			var url1='addCompany';
		    var method='POST';
		    var userData={fname:$scope.firstName,lname:$scope.lastName,email:$scope.email,cname:$scope.cname,sDate:$scope.sDate,eDate:$scope.eDate};
		    DataService.connectToServerSideScript(method,url1,userData)
			.then(function(response) {
				if (response.status==1) {
					alert(response.msg);
					$window.location.reload();
				}else{
					alert(response.msg);
				}
			},function(error) {
			    
			})
		}
	}
})
