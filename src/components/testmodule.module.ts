// --- FILE testmodule.module.ts ---

 class TestController {
  static $inject : string[] = [];
  constructor() {
    console.log('TestController initialized.');
  }
}

angular
  .module("testModule", [])
  .controller("testController", TestController);

// --- FILE testmodule.module.ts END ---
