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
                    $scope.partner = "Once another partner will register you will get an email. Have a nice day :-)";
                }
                if (data !='' && data !="pending"){
                    $scope.partner = data;
                    window.location.href = "raffle.html?a="+data;
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