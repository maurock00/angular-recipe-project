import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {

  @Output() onAddNewIngredient = new EventEmitter<Ingredient>();

  private newIngredient: Ingredient = new Ingredient("",0);  

  constructor() { 
  }

  ngOnInit() {
  }

  addNewIngredient(){ 
    this.onAddNewIngredient.emit(this.newIngredient); 
  }

}
