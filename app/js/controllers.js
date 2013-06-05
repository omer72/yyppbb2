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

        $scope.gameType = gameTypeName;
        $scope.gameTypeParsed = gameTypeParsed;
    }

    $scope.submit = function(){
        //http://localhost:3000/api/registerToGame/alon.heller@gmail.com/pingpong/alon
        $http.get('http://172.23.34.53:3000/api/registerToGame/' + $scope.email +'/'+ $scope.gameType + '/' + $scope.name).
            success(function(data,status,headers,config){
                if (data == '"pending"'){
                    window.location.href = "raffle.html?a=#icon cloud | Have a nice day :-)||#time";
                }else
                if (data !=''){
//                    $scope.partner = data;
                    window.location.href = "raffle.html?a=#icon cloud |Your partner is |#countdown 3 |"+data;
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