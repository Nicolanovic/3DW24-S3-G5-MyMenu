import { Component, OnInit } from '@angular/core';
import { Recette } from "../recette";
import { RECETTES} from "../mock-recettes";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    recettes = RECETTES;

  constructor() { }

  ngOnInit(): void {
  }

}
