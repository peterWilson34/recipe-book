import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes/recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipe;
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(item:Recipe){
    console.log(item)
    this.recipe=item;
  }
}
