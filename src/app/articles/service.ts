import { IQService } from "angular";

import { Article } from "./types";
import { AppConfig } from "../types";

/**
 * @todo: Consider to extend with Event.emitter
 */

export class ArticlesService {
  static selector: string = "articlesService";
  articles: Article[];

  constructor(appConfig: AppConfig, private $q: IQService) {
    "ngAnnotate";

    this.articles = [
      {
        id: 1,
        category: "Health",
        title: "Health title",
        views: 33,
        body: "Health body goes here"
      },
      {
        id: 2,
        category: "Economy",
        title: "Economy title",
        views: 2,
        body: "Economy body goes here"
      },
      {
        id: 3,
        category: "Politics",
        title: "Politics title",
        views: 45,
        body: "Politics body goes here"
      }
    ];
  }

  fetchArticles() {
    return this.$q.resolve(this.articles);
  }

  addArticle(article: Article): void {}

  removeArticle(id: string) {}

  updateArticle(id: string) {}
}
