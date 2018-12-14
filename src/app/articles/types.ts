export type Category = "Health" | "Economy" | "Politics";

export type Article = {
  id: number;
  category: Category;
  title: string;
  views: number;
  body: string;
};
