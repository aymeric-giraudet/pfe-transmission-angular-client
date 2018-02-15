import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MatIconModule, MatProgressSpinnerModule, MatSnackBarModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {TransmissionService} from "../transmission.service";
import {AngularFilePickerModule} from "angular-file-picker";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [MatProgressSpinnerModule, FormsModule, MatSnackBarModule, RouterTestingModule, AngularFilePickerModule, MatIconModule, NgbModule.forRoot()],
            providers: [TransmissionService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
