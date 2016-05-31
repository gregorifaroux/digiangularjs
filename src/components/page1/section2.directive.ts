module DigiSection2 {
  export class Section2Directive implements ng.IDirective {
    public restrict: string = "E";
    public replace: boolean = true;
    public templateUrl: string = 'components/page1/section2.html';
    public controller = DigiSection2.Section2Controller;
    public controllerAs: string = 'vm';
    public scope = {
    };
    public bindToController: boolean = true;
  }


    export interface ISection2Scope extends ng.IScope {
      // properties for isolated scope
    }

  export class Section2Controller {
    static $inject = ["$scope"];

    constructor(protected $scope: DigiSection2.ISection2Scope) {
      console.log('Section2Controller constructor ...');
    }
  }
}
