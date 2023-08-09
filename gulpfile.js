const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

function minifyCSS() {
  return gulp.src('css/*.css') // Replace 'path/to/source/css/' with the actual path to your CSS files.
    .pipe(cleanCSS({ compatibility: 'ie8' })) // Optional: Use 'ie8' compatibility mode if needed.
    .pipe(gulp.dest('css/min')); // Replace 'path/to/destination/css' with the output directory.
}

// Define a default task that runs the minifyCSS function
gulp.task('default', minifyCSS);