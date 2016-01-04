import {Component, Input,Output, EventEmitter} from 'angular2/core';
import {NgIf} from 'angular2/common';


@Component({
    selector: 'info-window',
    templateUrl: 'app/components/info-window/info-window.html',
    styleUrls: ['app/components/info-window/info-window.css'],
    providers: [],
    directives: [NgIf],
    pipes: [],
    events: ['closePartnerDetailsEv']
})

export class InfoWindow {
    @Input('selected-partner') partner;
    @Output() closePartnerDetailsEv: EventEmitter<any> = new EventEmitter();
    //take input partner from parent component on clicked marker
    constructor() {}

    closePartnerDetails(){
        this.closePartnerDetailsEv.emit(null);
    }

}
