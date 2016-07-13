// --- FILE my-controller-2.controller.ts ---

export class MyController2 {

    static $inject : string[] = [];
    constructor(
        console.log('MyController2 initialized.');
    ) { }

    test = 'This is MyController2.test.';

}

angular
    .module('myApp')
    .controller('MyController2', MyController2);

// --- FILE my-controller-2.controller.ts END ---
