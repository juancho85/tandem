import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';
import {TandemApp} from './app/tandem';

bootstrap(TandemApp, [ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);

