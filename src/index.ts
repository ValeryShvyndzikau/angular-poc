/**
 * Import the polyfills and vendor files
 * @todo: Consider to solve via webpack flow
 */
import "./polyfills";
import "./vendor";

/**
 * @todo: Apply CSS modules system
 */
import "./index.scss";

import * as angular from "angular";

import { delay } from "./common/utils";
import { moduleName as appModule } from "./app";

const runApplication = async () => {
  // do some async stuff, then start the app
  await delay(500);
  angular.bootstrap(document.getElementById("app"), [appModule]);
};

runApplication();
