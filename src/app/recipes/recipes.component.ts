import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes/recipe.model';
import  {RecipeService} from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
  
})
export class RecipesComponent implements OnInit {
  recipe;
  constructor(private recipceService:RecipeService) { }

  ngOnInit() {
    this.recipceService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.recipe = recipe;
      }
    )

  }
  onRecipeSelected(item:Recipe){
    console.log(item)
    this.recipe=item;
  }
}
