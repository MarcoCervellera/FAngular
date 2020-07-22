import { Component } from '@angular/core';
import {SortService} from "./services/sort.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'algorithms';
  numbers = [5,9,8,7,4,56,165,5,56,45,1465,46,54];

  constructor(sortService:SortService) {
    this.numbers = sortService.insertionSort(this.numbers);
  }

  ngOnInit(){

  }
}
