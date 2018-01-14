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
    public url: string;

    constructor(public transmissionService: TransmissionService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        if(this.transmissionService.transmission) {
            setInterval(() => {this.refresh();}, 2000)
        } else {
            this.router.navigate(['/login'], { skipLocationChange: true });
        }
    }

    public refresh() {
        this.transmissionService.transmission.get().then(value => this.torrents = value);
    }

    addByUrl() {
        console.log(this.url);
        this.transmissionService.transmission.addUrl(this.url).then(value => console.log(value));
    }
}
