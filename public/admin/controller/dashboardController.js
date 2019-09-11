var dept=angular.module('HLLOYD');
dept.controller('dashboardController',function($scope,$http,$state,$window,DataService){
	$scope.listView=true;
	$scope.cid='';
	$scope.objCompanyData=[];
	var url1='/admin/getCompany';
    var method='GET';
    var userData='';
    DataService.connectToServerSideScript(method,url1,userData)
	.then(function(response) {
		console.log('docs',response.data);
		if (response.status==200 && response.data.length > 0) {
			$scope.objCompanyData=response.data;
		}else{
			$scope.objCompanyData=[];
		}
	},function(error) {
	    
	})
	$scope.editCompanyData=function(id){
		var url2='/admin/editCompany';
	    var method2='POST';
	    var userData2={id:id};
	    DataService.connectToServerSideScript(method2,url2,userData2)
		.then(function(response) {
			console.log('docs',response.data);
			if (response.status==200 && response.data.length > 0) {
				angular.forEach(response.data,function(obj){
					$scope.firstName=obj.fname;
					$scope.lastName=obj.lname;
					$scope.email=obj.email;
					$scope.cname=obj.cname;
					$scope.sDate=obj.sdate;
					$scope.eDate=obj.edate;
					$scope.status=obj.status.toString();
					$scope.cid=obj._id;
				})
				$scope.listView=false;
				$scope.formView=true;
			}
		},function(error) {
		    
		})
	}
	$scope.backToListing=function(){
		$scope.listView=true;
		$scope.formView=false;
	}
	$scope.IsEmail=function(txtMobId) {
        //console.log('mob',txtMobId);
        var mob = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (mob.test(txtMobId) == false) {
            //alert("Please enter valid mobile number.");
            return false;
        }
        return true;
    }
	$scope.updateCompanyInfo=function(){
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
			var url3='/admin/updateCompany';
		    var method3='POST';
		    var userData3={fname:$scope.firstName,lname:$scope.lastName,email:$scope.email,cname:$scope.cname,sDate:$scope.sDate,eDate:$scope.eDate,status:$scope.status,id:$scope.cid};
		    DataService.connectToServerSideScript(method3,url3,userData3)
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
	$scope.inactiveCompanyData=function(id,status){
		var sta='';
		if (status==0) {
			sta=1;
		}else{
			sta=0;
		}
		var url3='/admin/updateCompanyStatus';
	    var method3='POST';
	    var userData3={id:id,status:sta};
	    DataService.connectToServerSideScript(method3,url3,userData3)
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
})
