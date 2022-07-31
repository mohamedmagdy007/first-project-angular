import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cilantro-lime-shrimp-lettuce-wraps1-1657203475.jpg?crop=0.801xw:0.727xh;0.0969xw,0.112xh&resize=980:*'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cilantro-lime-shrimp-lettuce-wraps1-1657203475.jpg?crop=0.801xw:0.727xh;0.0969xw,0.112xh&resize=980:*'
    ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
