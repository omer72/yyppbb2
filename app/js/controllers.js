'use strict';

/* Controllers */


function MyCtrl1($scope,$http,$location) {
    $scope.gameSelected = function(gameTypeName){
        $scope.gameType = gameTypeName;
    }

    $scope.submit = function(){

        $http.get('http://172.23.34.52/requestgame.ashx?gameType='+ $scope.gameType+"&name="+$scope.name+"&email="+$scope.email).
            success(function(data,status,headers,config){
                if (data == 'pending'){
                   alert(data);
                }
                if (data !='' && data !="pending"){
                    $scope.partner = data;
                    $location.path('/raffle');
                }
        }).
        error(function (data, status, headers, config) {
            alert(data);

        });
        $scope.gameType = null;
        $scope.name = null;
        $scope.email = null;
    }

}