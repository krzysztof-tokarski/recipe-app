export interface Recipe {
  name: string;
  rating: number;
  id: number;
  preparationSteps: string[];
  ingredients: Ingredient[];
  creatorId: number;
}

export interface Ingredient {
  name: string;
  quantity: string;
}
