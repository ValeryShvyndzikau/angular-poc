export type Category = "Health" | "Economy" | "Politics";

export type Article = {
  category: Category;
  title: string;
  views: number;
  body: string;
};
