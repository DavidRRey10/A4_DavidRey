import { Component } from '@angular/core';
import { data } from './app.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = this.titleOfTheApplication();
  }

  private titleOfTheApplication(): string {
    return data.app.generalInformation.title;
  }
}
import {bird} from './bird';
const Bird= new bird();
Bird.Birdname="joselito";
Bird.Wingspan="16";
Bird.eggsize=0;
console.log(Bird);