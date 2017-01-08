class Page2Controller {
    static $inject = [];
    constructor() {
        console.log("Custom Page2Controller ...");
    }
}

angular
.module('digiangularjs.page2', [])
    .controller('page2Controller', Page2Controller)
    .directive("page2Section1", [() => new DigiSection1.Section1Directive()])
    .directive("page2Section2", [() => new DigiSection2.Section2Directive()])
    ;
