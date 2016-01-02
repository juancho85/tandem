import {
    Component,
    provide
    } from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TandemApp} from './app/tandem';
import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MapMouseEvent,
    ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    ANGULAR2_GOOGLE_MAPS_DIRECTIVES
    } from 'angular2-google-maps/core';

bootstrap(TandemApp, [
    ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    // If you don't want to let angular2-google-maps load the Google Maps API script,
    // you can use the NoOpMapsAPILoader like this:
    provide(MapsAPILoader, {useClass: NoOpMapsAPILoader})
]).catch(err => console.error(err));
