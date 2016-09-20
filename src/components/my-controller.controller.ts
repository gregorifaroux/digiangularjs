// --- FILE my-controller.controller.ts ---

export class MyController {

    static $inject : string[] = ['$scope'];
    constructor(
        protected $scope:ng.IScope
    ) {
        $scope.test = 'This is scope.test.';
        console.log('MyController initialized.');
    }

    test = 'This is MyController.test.';

}

angular
    .module('myApp')
    .controller('MyController', MyController);

// --- FILE my-controller.controller.ts END ---
