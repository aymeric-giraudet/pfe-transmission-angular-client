import {Component, OnInit} from '@angular/core';
import {Transmission, SettingsConfig} from "node-transmission-typescript";
import {TransmissionService} from "../transmission.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public model: any = {};
    public connecting: boolean = false;

    constructor(
        public transmissionService: TransmissionService,
        public snackbar: MatSnackBar,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }

    public connect(): void {
        let settings = new SettingsConfig(this.model);
        settings.host = "cors-anywhere.herokuapp.com/" + settings.host;
        let transmission = new Transmission(settings);
        this.connecting = true;
        transmission.session()
            .then(() => {
                this.transmissionService.transmission = transmission;
                this.router.navigate(['/home'], { skipLocationChange: true });
            })
            .catch(err => {
                this.connecting = false
                this.snackbar.open("Connection error", undefined, {
                    duration: 3000
                });
            });
    }
}
