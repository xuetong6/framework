const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const replace = require("rollup-plugin-replace");

gulp.task("builddev", function() {
  return watch("./src/nodeuii/**/*.js", { ignoreInitial: false }, () => {
    gulp
      .src("./src/nodeuii/**/*.js")
      .pipe(
        babel({
          babelrc: false,
          plugins: ["transform-es2015-modules-commonjs"]
        })
      )
      .pipe(gulp.dest("build"));
  });
});
gulp.task("buildprod", function() {
  gulp
    .src("./src/nodeuii/**/*.js")
    .pipe(
      babel({
        babelrc: false,
        //ignore: ["./src/nodeuii/configs/config.js"],
        plugins: ["transform-es2015-modules-commonjs"]
      })
    )
    .pipe(
      rollup({
        output: { format: "cjs" }, //版本
        input: ["./src/nodeuii/configs/config.js"],
        plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify("production")
          })
        ]
      })
    )
    .pipe(gulp.dest("build"));
});

let _task = ["builddev"];
//上线
if (process.env.NODE_ENV == "production") {
  _task = ["buildprod"];
}
gulp.task("default", _task);