import { Article } from "./types";

/**
 * @todo: Consider to extend with Event.emitter
 */

export class ArticlesService {
  static selector: string = "articlesService";
  articles: Article[];

  constructor() {
    "ngAnnotate";

    this.articles = [
      {
        category: "Health",
        title: "Some title",
        views: 33,
        body: "Article body goes here"
      }
    ];

    console.log("service instantiated");
  }
}
