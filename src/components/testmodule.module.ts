// --- FILE testmodule.module.ts ---

export class TestController {
  static $inject : string[] = [];
  constructor() {
    console.log('TestController initialized.');
  }
}

angular
  .module("testModule", [])
  .controller("testController", TestController);

// --- FILE testmodule.module.ts END ---
