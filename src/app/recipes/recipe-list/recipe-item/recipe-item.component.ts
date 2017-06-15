import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private recipceService:RecipeService) { }

  ngOnInit() {
  }
  onSelectItem(){
    this.recipceService.recipeSelected.emit(this.recipe);
  }

}
