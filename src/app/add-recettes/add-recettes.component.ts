import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recettes',
  templateUrl: './add-recettes.component.html',
  styleUrls: ['./add-recettes.component.scss'],
})
export class AddRecettesComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  displayLien = false;
  displayRecette = false;
  addLien() {
    this.displayRecette = false;
    this.displayLien = true;
  }
  addRecette() {
    this.displayLien = false;
    this.displayRecette = true;
  }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

  private addInstru: Array<any> = [];

  addInstruValue() {
      this.addInstru.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteInstruValue(index) {
      this.addInstru.splice(index, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
