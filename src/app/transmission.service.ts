import { Injectable } from '@angular/core';
import {Transmission} from "node-transmission-typescript";

@Injectable()
export class TransmissionService {
  transmission: Transmission;
}
