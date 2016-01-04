import {Component, Input} from 'angular2/core';
import {PartnerModel} from '../../services/partner-service/partner-model'


@Component({
    selector: 'send-message-modal',
    templateUrl: 'app/components/send-message-modal/send-message-modal.html',
    styleUrls: ['app/components/send-message-modal/send-message-modal.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class SendMessageModal {
    @Input('selected-partner') partner:PartnerModel;
    constructor() {}

    sendMessage(message:any){
        console.log("send message to: "+ this.partner.username);
        console.log("message: ");
        console.log(message.value);
    }

}
