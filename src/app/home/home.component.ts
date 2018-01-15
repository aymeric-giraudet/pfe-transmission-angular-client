import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TransmissionService} from "../transmission.service";
import {ITorrent} from "node-transmission-typescript/dist/models";
import {PickedFile} from "angular-file-picker";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public torrents: ITorrent[];
    public url: string;
    public file: PickedFile;

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
        this.transmissionService.transmission.addUrl(this.url).then(value => console.log(value));
    }

    print() {
        console.log(this.file);
        let base64 = this.file.content.split(',')[1];
        this.transmissionService.transmission.addFileBase64(base64).then(value => console.log(value));
    }
}
