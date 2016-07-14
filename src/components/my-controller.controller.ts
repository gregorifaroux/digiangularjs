// --- FILE my-controller.controller.ts ---
 class MyController {

    static $inject : string[] = ['$scope'];
    test:string = 'This is MyController.test.';
    constructor(
        protected $scope:ng.IScope
    ) {
//        $scope.test = 'This is scope.test.';
        console.log('MyController initialized.');
    }


}

angular
    .module('myApp')
    .controller('MyController', MyController);

// --- FILE my-controller.controller.ts END ---
