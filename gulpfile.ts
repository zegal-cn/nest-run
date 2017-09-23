// // 参考：https://github.com/typeorm/typeorm/blob/master/gulpfile.ts
// import * as gulp from 'gulp';

import { Gulpclass, Task, SequenceTask, MergedTask } from "gulpclass";
import del = require("del");
import gulp = require("gulp");
import nodemon = require("gulp-nodemon");
import tslint = require("gulp-tslint");

@Gulpclass()
export class Gulpfile {
  @Task()
  test() {
    console.log("run test.");
  }

  @Task()
  clean(cb) {
    return del(["./build/**"], cb);
  }

  @Task()
  tslint() {
    return gulp
      .src(["./src/**/*.ts", "./test/**/*.ts", "!node_modules/**"])
      .pipe(tslint())
      .pipe(
        tslint.report({
          emitError: false,
        })
      )
      .pipe(
        tslint({
          configuration: "tslint.json",
        })
      );
  }

  @Task()
  run() {
    nodemon({
      // verbose: true,
      // restartable: 'rs',
      // colours: true,
      script: "index.js",
      ext: "ts js json",
      // execMap: { js: 'node --harmony' },
      env: { NODE_ENV: "development" },
      ignore: [".git", "node_modules/**/node_modules"],
    });
  }

  @Task()
  start() {
    this.tslint();
    this.run();
  }
}
