import {Component} from 'angular2/core';


@Component({
  selector: 'tandem-app',
  providers: [],
  templateUrl: 'app/tandem.html',
  directives: [],
  pipes: []
})
export class TandemApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
