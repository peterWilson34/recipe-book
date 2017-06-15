import { Component, OnInit, Input} from '@angular/core';
import { RecipeService } from '../recipes.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

}
