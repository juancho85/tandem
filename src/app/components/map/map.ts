import {Component, ElementRef, Renderer} from 'angular2/core';
import {UserService} from '../../services/user-service/user-service';
import {PartnerFilter} from '../partner-filter/partner-filter';
import {PartnerFilterCriteria} from '../partner-filter/partner-filter-criteria';
import {InfoWindow} from '../info-window/info-window';
import {UserModel} from '../../services/user-service/user-model';
import {PartnerModel} from '../../services/partner-service/partner-model';
import {PartnerService} from '../../services/partner-service/partner-service';

declare var google:any;

@Component({
    selector: 'map',
    templateUrl: 'app/components/map/map.html',
    styleUrls: ['app/components/map/map.css'],
    providers: [UserService, PartnerService],
    directives: [PartnerFilter, InfoWindow],
    pipes: []
})

export class Map {
    gMap:any;
    selectedPartner: PartnerModel;

    constructor(element: ElementRef,
                renderer: Renderer,
                private _userService: UserService,
                private _partnerService: PartnerService) {
        var opts = {
            center: {
                lat: 40.4198305,
                lng: -3.7048106
            },
            zoom: 10,
            disableDefaultUI: false,
            scrollwheel: true,
            draggable: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM,
                style: google.maps.ZoomControlStyle.SMALL
            },
            panControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        }

        renderer.setElementClass(element, 'map-canvas', true);
        const container = element.nativeElement.querySelector('.map-inner');
        this.gMap = new google.maps.Map(container, opts);
    }

    //partner results
    partnerResults: PartnerModel[] = [];

    markers: Marker[] = [];

    launchFilteredSearch(criteria:PartnerFilterCriteria){
        this.removeMarkers();
        this._partnerService.getPartners(criteria).then((partners)=>this.partnerResults=partners);
        //TODO: handle fail
        this.partnerResults.forEach((partner)=>{
            var gMarker = {
                map: this.gMap,
                lat: partner.lat,
                lng: partner.lng,
                label: partner.username,
                partner: partner
            }
            this.addMarker(gMarker, partner);
        });
    }

    showPartner(partner: PartnerModel){
        this.selectedPartner = partner;
    }

    resetSelectedPartner(){
        this.selectedPartner = null;
    }

    removeMarkers(){
        this.markers.forEach((marker)=>marker.setMap(null));
    }

    addMarker(opts: Marker, partner: PartnerModel){
        opts.position = {
            lat: opts.lat,
            lng: opts.lng
        };
        var gMarker = new google.maps.Marker(opts);
        this._on({
            obj: gMarker,
            eventName: 'click',
            callback: function(){
                this.showPartner(partner);
            }
        });
        this.markers.push(gMarker);
    }

    _on(opts:OnEvent) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.eventName, function(e){
            opts.callback.call(self, e, opts.obj);
        });
    }
}

interface Marker {
    map: any;
    lat: number;
    lng: number;
    label?: string;
    content?: string;
    position?: any;
    setMap?: (any) => void;
}

interface OnEvent {
    obj: any;
    eventName: string;
    callback: any;
}
