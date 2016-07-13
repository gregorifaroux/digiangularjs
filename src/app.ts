// --- FILE main.ts ---
/// <reference path="../typings/index.d.ts" />

module app {
  angular.module('myApp', ["testModule"])
    .run(() => { console.log('myApp initialized.'); });
}

// --- FILE main.ts END ---
