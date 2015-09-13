# Contributing
*This page is not complete, but does contain some quick notes pertaining to  development/contributing.*

## Prerequisites
1. **NPM** ([installation](https://docs.npmjs.com/getting-started/installing-node))  
    1.1. Stylesheets: gulp-autoprefixer, gulp-group-css-media-queries, gulp-sass  
    1.2. Markup (HTML): gulp-jade  
    1.3. Javascript: gulp-jshint, gulp-uglify, jshint-stylish
    1.4. Images: gulp-imagemin
    1.4. Other/General: gulp-rename, gulp-sourcemaps

2. **Gulp** ([installation](http://gulpjs.com))

Once you have NPM (node) and Gulp installed, you can install the required packages by entering the project directory and running `npm install`.

## Development
Your features should be developed in their own branch, preferably prefixed with `feature-<your feature name>`. All feature branches should be developed off of, and submitted back to, the `develop` branch.
