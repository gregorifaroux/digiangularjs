## Angular & Typescript Seed Project

Simple seed project using Angular 1.x (latest), Typescript, Gulp, and Jade. We are implementing best practices to ease the migration to Angular 2.x and especially dividing our apps in directives to approximate Angular 2’s component architecture.


Here are some of the concepts and tools we use:

* **Angularjs** as our backbone for a single page application.
* **Angular Material** providing UI component and a reference implementation of Google’s Material Design Specification.
* **Responsive Side Menu** that hides on mobile and small desktop screen. On mobile the menu icon is in the top right and on small desktop in the top left to comply to modern usability patterns.
* **Typescript** to prepare for the Angular 2 upgrade which is written in Typescript and to provide type safety (i.e. finding more errors at compile time.)
* **Organize the files in components** to avoid folders likes ‘controller’, ‘view’, and ‘model’ that include dozen of files and make it hard to work on a component as the developer finds herself switching between folders all the time.
* **Using Component Directives** to prepare for Angular 2 and to reduce the complexity of the app by creating our own HTML tags to have a very modular application.
* **Gulp** is a task runner to automate compiling Typescript files to Javascript, converting Jade templates to HTML, and dealing with dependencies to avoid human errors and long hours spent updating script tags.
* **Jade** as a templating tool as it more error-proof that you do not need closing tags and it looks cleaner. If this is too much of a learning curve, we often use a jade converter to teach and learn.
* **Typings** to bring TypeScript type definitions that enables a lot of features in editor to develop.
* **Bower** to manage all of our libraries, assets, etc.
* **Browsersync** to provide live reloads as you develop to cut out repetitive manual tasks.
* **mainBowerFiles** to automatically grab files (js & css) from our libraries and combine them into a vendor.js file and vendor.css files to simplify our includes.
Even if there are lots of tools and concepts, we try to keep it as simple as possible. This first post will look at describing the overall project and we will then explore some concepts and components in future articles.

### BEFORE THE INSTALL:
Check that you have npm, bower, and typings installed:
```
$ npm --version
$ bower --version
$ typings --version
```
### TO INSTALL:
To create the app, you need to download the libraries by calling npm install which will automatically call the other components (bower & typings as a postinstall script.) Then, you can invoke gulp serve to build and open the app.
```
$ npm install
```
### TO RUN
```
$ gulp serve
```

Recommended Editor:
atom: https://atom.io/
. Theme: seti & monokai seti
. Plugins: angularjs, atom-beautify, atom-live-server, atom-toolbar, atom-typescript, close-tags, flex-tool-bar, git-plus, tool-bar, atom-jade
. Toolbar example: toolbar.cson
