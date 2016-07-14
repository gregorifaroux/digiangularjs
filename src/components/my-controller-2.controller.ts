// --- FILE my-controller-2.controller.ts ---

 class MyController2 {

    static $inject: string[] = [];
    test:string = 'This is MyController2.test.';
    constructor(
    ) {
        console.log('MyController2 initialized.');
    }


}

angular
    .module('myApp')
    .controller('MyController2', MyController2);

// --- FILE my-controller-2.controller.ts END ---
