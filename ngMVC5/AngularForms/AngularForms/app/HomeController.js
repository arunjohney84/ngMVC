angularFormsApp.controller('HomeController',
    function ($scope, $location, $modal, DataService) {
        
        $scope.showCreateEmployeeForm = function () {
            // $location.path('/newEmployeeForm');
            $modal.open({
                templateUrl: "/app/EmployeeForm/efTemplate.html",
                controller: "efController"
            });
        };
        
        $scope.showUpateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id);
        };
        
    });