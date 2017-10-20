import { Component } from '@angular/core';
import { Transmission, SettingsConfig } from "node-transmission-typescript";
import { IAddTorrent } from "node-transmission-typescript/dist/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PFE';
  value = 0;

  private get(transmission: Transmission, result: IAddTorrent): void {
    var prom2 = transmission.get([result.id]);
    prom2.then((res) => {
      this.value = Math.floor((res[0].downloadedEver / res[0].sizeWhenDone) * 100);
      if(res[0].downloadedEver >= res[0].sizeWhenDone){ return; }
      setTimeout(this.get(transmission, result), 1000);
    });
  }

  public onClick(): void {
    var settings = 
    new SettingsConfig({ host: "cors-anywhere.herokuapp.com/aymericard.me", port: 9091,
    username: "transmission", password: "amaguiz"
    });
    var transmission = new Transmission(settings);
    var prom = transmission.addUrl('http://releases.ubuntu.com/14.04.1/ubuntu-14.04.1-desktop-amd64.iso.torrent');
    prom.then((res) => {
        this.get(transmission, res);
    });
  }
}