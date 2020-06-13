## dw-imagegame

The premise of the app is that a user gets multiple images and needs to select the common theme.
At this point in time, only placeholder questions are used.


### Building the code

```bash
$ git clone the repo
$ npm i
$ npm i -g gulp
$ gulp serve
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - Builds and serves the image on [localhost:4321/temp/workbench.html](localhost:4321/temp/workbench.html)
gulp bundle - TODO
gulp package-solution - TODO

### TODO's

- build options
- add real questions
- add actual resulthandling
