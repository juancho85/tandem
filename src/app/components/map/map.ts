import {Component} from 'angular2/core';
import {UserService} from '../../services/user-service/user-service';
import {PartnerFilter} from '../partner-filter/partner-filter';
import {PartnerFilterCriteria} from '../partner-filter/partner-filter-criteria';
import {UserModel} from '../../services/user-service/user-model';
import {PartnerModel} from '../../services/partner-service/partner-model';
import {PartnerService} from '../../services/partner-service/partner-service';

import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MapMouseEvent,
    ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    ANGULAR2_GOOGLE_MAPS_DIRECTIVES
    } from 'angular2-google-maps/core';

@Component({
    selector: 'map',
    templateUrl: 'app/components/map/map.html',
    styleUrls: ['app/components/map/map.css'],
    providers: [UserService, PartnerService],
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, PartnerFilter],
    pipes: []
})

export class Map {
    constructor(private _userService: UserService, private _partnerService: PartnerService){}
    // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    //partner results
    partnerResults: PartnerModel[] = [];

    clickedMarker(label: string) {
        window.alert(`clicked the marker: ${label || ''}`);
    }

    mapClicked($event: MapMouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    }

    markers: marker[] = [];
    //markers: marker[] = [
    //    {
    //        lat: 51.673858,
    //        lng: 7.815982,
    //        label: 'A'
    //    }
    //]

    //TODO: is it really necessary to add ((filterPartners)="launchFilteredSearch($event)) in the HTML?
    //ideally should be only in the component
    launchFilteredSearch(criteria:PartnerFilterCriteria){
        this._partnerService.getPartners(criteria).then((partners)=>this.partnerResults=partners);
        this.markers = this.partnerResults.map(function(partner){
            return {lat: partner.lat, lng: partner.lng, label: partner.username}
        });
    }
}
// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
}

