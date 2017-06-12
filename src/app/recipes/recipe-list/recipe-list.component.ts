import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[RecipeService]

})
export class RecipeListComponent implements OnInit {
  @Output()recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] ;
  constructor(private recipceService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipceService.getRecipes();

  }
  onItemClicked(item){
    console.log(item)
    this.recipeSelected.emit(item)
  }
}
