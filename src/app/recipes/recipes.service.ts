import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  constructor(private shoppingListService:ShoppingListService){}
  recipeSelected=  new EventEmitter<Recipe>();
  private recipes: Recipe[] =[
    new Recipe('peter','description goes here','http://placehold.it/50x50',[
      new Ingredient('Meat',1),
      new Ingredient('Tomatoes',5)
    ]),
    new Recipe('new recipe','description goes here','http://placehold.it/50x50',[
      new Ingredient('Banana',1),
      new Ingredient('Apple',5)
    ]),
  ];
  getRecipes(){
    return this.recipes;
  }
  addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.addIngredientsList(ingredients);
  }
}
