'use strict';

/* Controllers */


function MyCtrl1($scope) {



    $scope.gameSelected = function(gameTypeName){
        $scope.gameType = gameTypeName;
    }

}