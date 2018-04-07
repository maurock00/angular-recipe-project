import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component ({ 
      selector: 'shopping-list', 
      templateUrl: 'shopping-list.component.html'
})


export class ShoppingListComponent { 

      private ingredients: Ingredient[] = [
            new Ingredient('Apples', 5), 
            new Ingredient('Lettuce', 2)
      ]; 

      constructor() { 

      }

      addNewIngredient(newIngredient: Ingredient){ 
            this.ingredients.push(newIngredient);
      }
}