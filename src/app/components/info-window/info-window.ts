import {Component, Input} from 'angular2/core';
import {NgIf} from 'angular2/common';


@Component({
    selector: 'info-window',
    templateUrl: 'app/components/info-window/info-window.html',
    styleUrls: ['app/components/info-window/info-window.css'],
    providers: [],
    directives: [NgIf],
    pipes: []
})
export class InfoWindow {
    @Input('selected-partner') partner;
    //take input partner from parent component on clicked marker
    constructor() {}

    resetSelectedPartner(){
        this.partner = null;
    }

}
