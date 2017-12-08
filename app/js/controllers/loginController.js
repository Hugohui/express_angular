app.controller('loginController',['$scope','$http','$state',function($scope,$http,$state){
    $scope.user = {
        name:'tom',
        pwd:''
    }

    //登录
    $scope.login = function(){
        $http({
            method:'post',
            url:'/api/login',
            data:$scope.user,
            dataType:'json',
        }).then(function(data){
            var resData = data.data;
            if(resData.result == 0){
                $state.go('app');
            }
        },function(err){
            console.error(new Error('未知错误'));
        });
    }
}]);