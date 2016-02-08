(function () {
    var app = angular.module('app', []);
    
    app.controller('IndexController', function ($scope) {
        
        $scope.users = [
            {
                firstname: 'Ran',
                lastname: 'Gurung'
            },
            {
                firstname: 'Raj',
                lastname: 'Dahal'
            }
        ];
        
    });
    
})();