
export const PRODUCT_ENDPOINT = 'http://localhost:5050/products';

export const USER_ENDPOINT = 'http://localhost:5050/users';

export const RECIPE_ENDPOINT = 'http://localhost:5050/recipes';


export type ProductDTO = {
    id: string;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
};

export type ProductResponse = ProductDTO[];

export type UserDTO = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

export type UserResponse =  UserDTO[];


export interface RecipeDTO {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  userId: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

export type RecipeResponse =  RecipeDTO[];

/**
 *  - Définition du type de données "Notification"
  *    - "id"
  *    - "createdAt" (Timestamp :Date.now())
  *    - "level"
  *    - "title"
  *    - "message"
*/ 
export interface Notification {
  id: number
  createdAt: number
  level: 'info' | 'error' | 'success'
  title: string
  message: string
}
 