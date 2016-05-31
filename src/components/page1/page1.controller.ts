class Page1Controller {
    static $inject = [];
    constructor() {
        console.log("Custom Page1Controller ...");
    }
}

angular
    .module('digiangularjs.page1', [])
    .controller('agendaController', Page1Controller)
    .directive("page1Section1", [() => new DigiSection1.Section1Directive()])
    .directive("page1Section2", [() => new DigiSection2.Section2Directive()])
;
