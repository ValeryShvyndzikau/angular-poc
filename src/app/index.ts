import * as angular from "angular";

import { moduleName as articlesModule } from "./articles";

/**
 * @todo: Add strict DI mode
 */

// prettier-ignore
export const moduleName = angular.module("app", [
    articlesModule
  ])
  .component("appComponent", {
    template: `<div>
      YO ROOT RENDERED!
      <articles-container>
    </div>`
  })
  .constant({
    appConfig: {
      baseURL: 'somehost/api'
    }
  })
  .name;
