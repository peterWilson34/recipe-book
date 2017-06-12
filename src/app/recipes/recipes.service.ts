import {Recipe} from './recipe.model';
export class RecipeService{
  private recipes: Recipe[] =[
    new Recipe('peter','description goes here','http://placehold.it/50x50'),
    new Recipe('new recipe','description goes here','http://placehold.it/50x50'),
  ];
  getRecipes(){
    return this.recipes;
  }
}
