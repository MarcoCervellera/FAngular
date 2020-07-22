import { Component } from '@angular/core';
import {ServicesService} from "./modules/core/services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string;

  constructor(servicesService: ServicesService) {
    this.title = servicesService.demo();
  }
}
