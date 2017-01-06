
module DigiToolbar
{
    export class ToolbarDirective implements ng.IDirective
    {
        public restrict: string = "E";
        public replace: boolean = true;
        public templateUrl: string = 'components/navigation/toolbar.html';
        public controller = DigiToolbar.ToolbarController;
        public controllerAs: string = 'vm';
        public scope = {};
  }



    export class ToolbarController
    {
        static $inject = ['$mdSidenav'];
        public $mdSidenav: ng.material.ISidenavObject;
        constructor($mdSidenav: ng.material.ISidenavObject)
        {
          var vm = this;
          vm.$mdSidenav = $mdSidenav;
          console.log('ToolbarController ... started.');
        }
    }
}
