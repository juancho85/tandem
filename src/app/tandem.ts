import {Component} from 'angular2/core';
import {Navigation} from './components/navigation/navigation';
import {Map} from './components/map/map';
import {Map2} from './components/map2/map2';


@Component({
  selector: 'tandem-app',
  providers: [],
  templateUrl: 'app/tandem.html',
  directives: [Navigation, Map, Map2],
  pipes: []
})
export class TandemApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
