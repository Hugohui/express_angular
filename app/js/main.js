'use strict';
/**
 * 主控制器
 */
app.controller('mainCtrl',['$scope',function($scope){
    $scope.app = {
        name:'express+angular',
        version:'1.0'
    };
}]);