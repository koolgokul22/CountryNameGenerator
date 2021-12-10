import { Component } from '@angular/core';
import countryList from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-generator';

  country = '';


  generate(){
    let length = countryList.length;    
    let randomNo = Math.floor(Math.random()*(length+1));
    this.country = countryList[randomNo];
  }
}
