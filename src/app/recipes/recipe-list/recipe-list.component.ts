import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe' , 'This is a simple test' , 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wNk0znq6E1ysLCNHNSQUzgHaLG%26pid%3DApi&f=1'),
    new Recipe('A Test Recipe' , 'This is a simple test' , 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wNk0znq6E1ysLCNHNSQUzgHaLG%26pid%3DApi&f=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
