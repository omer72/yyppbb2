'use strict';

/* Controllers */


function MyCtrl1($scope,$http) {
    $scope.gameSelected = function(gameTypeName){
        var gameTypeParsed = '';

        switch(gameTypeName)
        {
            case 'pingpong':
                gameTypeParsed = 'Ping-pong';
                break;
            case 'basketball':
                gameTypeParsed = 'Basketball';
                break;
            case 'foosball':
                gameTypeParsed = 'Table Football';
                break;
            case 'cupofcoffee':
                gameTypeParsed = 'Cup of Coffee';
                break;
            case 'xbox':
                gameTypeParsed = 'XBox';
                break;
        }

        $scope.gameType = gameTypeParsed;
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