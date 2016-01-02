import {Component} from 'angular2/core';
import {Navigation} from './components/navigation/navigation';
import {Map} from './components/map/map';


@Component({
  selector: 'tandem-app',
  providers: [],
  templateUrl: 'app/tandem.html',
  directives: [Navigation, Map],
  pipes: []
})
export class TandemApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
