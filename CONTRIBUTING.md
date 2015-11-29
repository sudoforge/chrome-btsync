# Contributing
_This page is not complete, but does contain some quick notes pertaining to  development/contributing._

## Prerequisites
- **NPM** ([installation](https://docs.npmjs.com/getting-started/installing-node))  

   1.1. Stylesheets: gulp-autoprefixer, gulp-group-css-media-queries, gulp-sass

   1.2. Markup (HTML): gulp-jade  

   1.3. Javascript: gulp-jshint, gulp-uglify, jshint-stylish

   1.4. Images: gulp-imagemin

   1.4. Other/General: gulp-rename, gulp-sourcemaps

- **Gulp** ([installation](http://gulpjs.com))

Once you have NPM (node) and Gulp installed, you can install the required packages by entering the project directory and running `npm install`.

## Development
**Important Note**: Run `gulp build` to do a one-time compilation of source files (since processed files are not included in the repo), and run `gulp watch` while you are developing to have your files watched for changes and processed automatically.

Fork this repository, create your feature, and submit a pull request back to this repository. Your features should be developed in their own branch, preferably prefixed with `feature-`. All feature branches should be developed off of, and submitted back to, the `develop` branch. Rebasing master before pushing your "final" to your fork can speed up merges.
