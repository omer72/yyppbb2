'use strict';

/* Controllers */


function MyCtrl1($scope,$http) {
    $scope.gameSelected = function(gameTypeName){
        $scope.gameType = gameTypeName;
    }

    $scope.submit = function(){

        $http.get('http://172.23.34.52/requestgame.ashx?'+)
    }

}