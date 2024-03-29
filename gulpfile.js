var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');
 
/**
 * Compile typescript files
 */
gulp.task('ts', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
        }))
        .pipe(gulp.dest('dist'));
});

/**
 * Bundle .js files neatly (broken)
 */
// gulp.task('bundle', function() {
//     gulp.src('dist/PMC.js', {read: false})
//         //.pipe(browserify({
//         //    'standalone': true
//         //}))
//         .pipe(rename('bundle.js'))
//         .pipe(gulp.dest('dist'));
// });

/**
 * Start node.js server, and listen for changes
 */
gulp.task('start', ['ts'], function () {

    livereload.listen();

    var stream = nodemon({ 
                script: 'server.js',
                ext: 'ts',
                tasks: ['ts']
    });

    stream
        .on('restart', function () {
            console.log('Restarted!');
            gulp.src('server.js')
                .pipe(livereload());
        })
        .on('crash', function() {
            console.error('Application has crashed!\n');
            stream.emit('restart', 10);  // restart the server in 10 seconds 
        });
})