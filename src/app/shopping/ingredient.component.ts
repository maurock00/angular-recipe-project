import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {  
  constructor() { }

  @Input() ingredient: Ingredient; 

  ngOnInit() {
  }

  
}
