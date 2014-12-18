
angularFormsApp.directive('employeeForm',
    function () {
        return {
            restrict: 'E', // E = use as an element
            templateUrl: 'app/EmployeeForm/efTemplate.html'
        };
    });