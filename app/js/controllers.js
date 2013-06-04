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


    }

}