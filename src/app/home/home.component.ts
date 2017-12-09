import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TransmissionService} from "../transmission.service";
import {ITorrent} from "node-transmission-typescript/dist/models";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public torrents: ITorrent[];

    constructor(public transmissionService: TransmissionService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.transmissionService.transmission.get().then(value => this.torrents = value);
    }

}
