BEFORE THE INSTALL:
Check that you have npm, bower, and tsd installed:

$ npm --version
$ bower --version
$ typings --version

TO INSTALL:
$ npm install

Recommended Editor:
atom: https://atom.io/
. Theme: seti & monokai seti
. Plugins: angularjs, atom-beautify, atom-live-server, atom-toolbar, atom-typescript, close-tags, flex-tool-bar, git-plus, tool-bar, atom-jade
. Toolbar example: toolbar.cson

---

Typescript compiles to :

    // --- FILE main.ts ---
    /// <reference path="../typings/index.d.ts" />
    /// <reference path="../components/my-controller-2.controller.ts" />
    var app;
    (function (app) {
        angular.module('myApp', ["testModule"])
            .run(function () { console.log('myApp initialized.'); });
    })(app || (app = {}));
    // --- FILE main.ts END ---
    // --- FILE my-controller-2.controller.ts ---
    // --- FILE my-controller-2.controller.ts END ---
    // --- FILE my-controller.controller.ts ---
    // --- FILE my-controller.controller.ts END ---
    // --- FILE testmodule.module.ts ---
    // --- FILE testmodule.module.ts END ---

Expected output: Each ``.ts`` file individually compiled and concatenated.
