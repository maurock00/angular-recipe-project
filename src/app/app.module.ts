import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list.component';
import { ShoppingDetailComponent } from './shopping/shopping-detail.component';
import { IngredientComponent } from './shopping/ingredient.component';
import { RecipeListComponent } from './recipe-book/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail.component';
import { RecipeComponent } from './recipe-book/recipe.component';
import { HeaderComponent } from './template/header.component';
import { HighlightDirective } from './directive/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    HeaderComponent,
    HighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
