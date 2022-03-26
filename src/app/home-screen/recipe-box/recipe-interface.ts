export interface Recipe {
  name:string;
  rating: number;
  id: number;
  preparationSteps: string[];
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  value: string;
}
