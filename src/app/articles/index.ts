import * as angular from "angular";

import { Category } from "./types";
import { ArticlesService } from "./service";
import { ArticlesContainer } from "./containers/articles";

// prettier-ignore
export const moduleName = angular.module("app.articles", [])
  .service(ArticlesService.selector, ArticlesService)
  .component(ArticlesContainer.selector, new ArticlesContainer())
  .name;
