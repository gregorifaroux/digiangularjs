class HomeController {
    static $inject = ['$mdSidenav'];
    public $mdSidenav: ng.material.ISidenavObject;

    constructor($mdSidenav: ng.material.ISidenavObject) {
        console.log("home.controller constructor");
        this.$mdSidenav = $mdSidenav;
    }
}

angular
    .module('digiangularjs.home', ['ngMaterial'])
    .controller('homeController', HomeController)
    .directive("digiLeftnav", [() => new DigiLeftNav.LeftNavDirective()])
    .directive("digiToolbar", [() => new DigiToolbar.ToolbarDirective()])
;
