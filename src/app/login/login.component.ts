import {Component, OnInit} from '@angular/core';
import {Transmission, SettingsConfig} from "node-transmission-typescript";
import {TransmissionService} from "../transmission.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public model: any = {};

    constructor(
        public transmissionService: TransmissionService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }

    public connect(): void {
        let settings = new SettingsConfig(this.model);
        settings.host = "cors-anywhere.herokuapp.com/" + settings.host;
        let transmission = new Transmission(settings);
        transmission.session()
            .then(value => {
                this.transmissionService.transmission = transmission;
                this.router.navigate(['/home'], { skipLocationChange: true });
            })
            .catch(reason => console.log(reason));
    }
}
