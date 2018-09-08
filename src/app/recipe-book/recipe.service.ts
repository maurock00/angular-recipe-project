import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'This is a set', 
    'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg', 
    [ new Ingredient('Meat', 1), new Ingredient('Tomato', 3)]),

    new Recipe('A test Recipe 2', 'This is a test', 
    'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg', 
    [ new Ingredient('Chicken', 1), new Ingredient('Lettuce', 2)]),
  ]; 

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() { 
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index]; 
  }

  emitRecipeSelected(recipe: Recipe) { 
    this.recipeSelected.emit(recipe);
  }
}
