import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient} from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')nameInput;
  @ViewChild('amountInput')amountInput;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddIngrediant(){
    console.log(this.nameInput.nativeElement.value)
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value,
    this.amountInput.nativeElement.value));
  }
}
