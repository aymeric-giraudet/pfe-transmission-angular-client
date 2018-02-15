import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TransmissionService} from "../transmission.service";
import {ITorrent} from "node-transmission-typescript/dist/models";
import {PickedFile} from "angular-file-picker";
import {Transmission} from "node-transmission-typescript";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public transmission: Transmission;
    public torrents: ITorrent[];
    public url: string;

    constructor(public transmissionService: TransmissionService,
                public snackbar: MatSnackBar,
                private route: ActivatedRoute,
                private router: Router,) {
        this.transmission = transmissionService.transmission;
    }

    ngOnInit() {
        if(this.transmission) {
            setInterval(() => {this.refresh();}, 1000)
        } else {
            this.router.navigate(['/login'], { skipLocationChange: true }).catch(err => console.log(err));
        }
    }

    refresh() {
        this.transmission.get()
            .then(value => this.torrents = value)
            .catch(err => {
                console.log(err);
                this.router.navigate(['/login'], { skipLocationChange: true }).catch(err => console.log(err));
            });
    }

    addByUrl() {
        this.transmission.addUrl(this.url)
            .then(() => {
                return this.transmission.get();
            })
            .then(value => {
                this.torrents = value;
            })
            .catch(err => {
                this.snackbar.open(err, undefined, {
                    duration: 3000
                });
            });
    }

    addFile(file: PickedFile) {
        if(file.type !== "application/x-bittorrent") {
            this.snackbar.open("You need to upload a torrent file.", undefined, {
                duration: 3000
            });
            return;
        }
        let base64 = file.content.split(',')[1];
        this.transmission.addFileBase64(base64)
            .then(() => {
                return this.transmission.get();
            })
            .then(value => {
                this.torrents = value;
            })
            .catch(err => {
                this.snackbar.open(err, undefined, {
                    duration: 3000
                });
            });
    }

    removeTorrent(torrent: ITorrent) {
        this.transmission.remove([torrent.id], true)
            .then(() => {
                return this.transmission.get();
            })
            .then(value => {
                this.torrents = value;
            })
            .catch(err => {
                this.snackbar.open(err, undefined, {
                    duration: 3000
                });
            });
    }
}
