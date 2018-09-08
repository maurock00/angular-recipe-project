import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5), 
    new Ingredient('Lettuce', 2)
  ]; 

  public ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  verifyIfIngredientExists(name: string) {
    var result = -1;
    for( var i = 0; i< this.ingredients.length; i++) 
    { 
      if(this.ingredients[i].name == name)
        result =  i;
    }
    return result;
  }

  setAmountByIndex(index: number, amountToAdd: number) { 
    this.ingredients[index].amount += amountToAdd;
  }

  insertIngredient(ingredient: Ingredient) { 
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  
}
