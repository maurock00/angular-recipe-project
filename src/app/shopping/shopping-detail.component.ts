import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {

  private name: string = '';
  private amount: number = 0;

  constructor(private shoppingService: ShoppingService) { 
  }

  ngOnInit() {
  }

  addNewIngredient(){ 
    var newIngredient = new Ingredient(this.name,this.amount);
    this.shoppingService.insertIngredient(newIngredient);
}

}
