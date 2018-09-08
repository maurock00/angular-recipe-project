import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from './recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { ShoppingService } from '../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe; 
  dropdown: string = ""; 
  id: number; 

  constructor(
    private shoppingService: ShoppingService,
    private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute) 
  { }

  ngOnInit() {
    this.route.params.subscribe( 
      (params: Params) => {
        this.id = +params['id']; 
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  dropdownToggle() { 
    this.dropdown = this.dropdown == '' ? 'show' : ''; 
  }

  sentIngredientsToShopping() { 
    this.recipe.ingredients.forEach(ingredient => {
      var index = this.shoppingService.verifyIfIngredientExists(ingredient.name);
      if( index > -1){
        this.shoppingService.setAmountByIndex(index, ingredient.amount);
      }else{ 
        this.shoppingService.insertIngredient(ingredient);
      }
    });
    alert('Ingredients were added to shopping list');
  }

  onEditRecipe(): void{ 
    this.router.navigate( ['edit'], {relativeTo: this.route} );
  }

}
