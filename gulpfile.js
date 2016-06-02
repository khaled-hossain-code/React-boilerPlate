var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('default', function(){
    var bundler = watchify(browserify({
        entries:['./src/app.jsx'],
        transform: [reactify], //convert jsx to javascript
        extensions: ['.jsx'], // find extention of jsx
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    
    function build(file){
        if(file) gutil.log('Recompiling '+ file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js')) //put all files in main.js
            .pipe(gulp.dest('./'));//put the main.js file in current directory
    }
    
    build();
    bundler.on('update', build);
});