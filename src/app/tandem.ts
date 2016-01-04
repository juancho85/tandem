import {Component} from 'angular2/core';
import {Navigation} from './components/navigation/navigation';
import {Map} from './components/map/map';
import {SignUp} from './components/sign-up/sign-up';
import {SearchPartner} from './components/search-partner/search-partner';
import {ROUTER_DIRECTIVES, RouteConfig, Route, Router} from 'angular2/router';

@Component({
  selector: 'tandem-app',
  providers: [],
  templateUrl: 'tandem-app.html',
  directives: [Navigation, Map, ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
    new Route({path:'/', name: 'SearchPartner', component: SearchPartner}),
    new Route({path:'/sign-up', name: 'SignUp', component: SignUp})
])

export class TandemApp {
    router: Router;
    constructor(router: Router){
        this.router = router;
    }

}
