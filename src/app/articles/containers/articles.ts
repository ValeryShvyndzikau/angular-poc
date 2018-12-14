import { IComponentOptions, IScope } from "angular";

import { Article } from "../types";
import { ArticlesService } from "../service";

class ArticlesController {
  articles: Article[];
  constructor(public articlesService: ArticlesService, public $scope: IScope) {
    "ngAnnotate";
  }

  $onInit() {
    this.fetch();
  }

  fetch() {
    this.articlesService.fetchArticles().then(data => {
      this.articles = data;
      //this.$scope.$applyAsync();
    });
  }
}

export class ArticlesContainer {
  static selector = "articlesContainer";
  controller = ArticlesController;
  template = `
    <ul>
      <li ng-repeat="article in $ctrl.articles">
       {{article.title}}
       </li>
    </ul>
  `;
}
