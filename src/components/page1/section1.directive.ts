module DigiSection1 {
  export class Section1Directive implements ng.IDirective {
    public restrict: string = "E";
    public replace: boolean = true;
    public templateUrl: string = 'components/page1/section1.html';
    public controller = DigiSection1.Section1Controller;
    public controllerAs: string = 'vm';
    public scope = {
    };
    public bindToController: boolean = true;
  }


    export interface ISection1Scope extends ng.IScope {
      // properties for isolated scope
    }

  export class Section1Controller {
    static $inject = ["$scope"];

    constructor(protected $scope: DigiSection1.ISection1Scope) {
      console.log('Section1Controller constructor ...');
    }
  }
}
