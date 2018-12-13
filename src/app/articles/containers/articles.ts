import { IComponentOptions } from "angular";
import { ArticlesService } from "../service";

class ArticlesController {
  constructor(articlesService: ArticlesService) {
    "ngAnnotate";
  }

  $onInit() {
    console.log("ArticlesController init");
  }
}

export class ArticlesContainer {
  static selector = "articlesContainer";
  controller = ArticlesController;
  template = `<div>ARTICLES COMPONENT</div>`;
}
