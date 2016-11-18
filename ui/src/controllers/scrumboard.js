(function() {
    if (!app.controllers) app.controllers = {};

    app.controllers.scrumboard = function($scope, $http) {
        $scope.data = [];
        $http.get(app.ws['lists']).then(function(response){
            $scope.data = response.data;
        });

        $scope.add = function(list, title){
            list.cards.push({
                title : title
            });
        }
    };
}())
