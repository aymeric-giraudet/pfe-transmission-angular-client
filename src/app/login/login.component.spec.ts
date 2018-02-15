import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {MatProgressSpinnerModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import { MatSnackBarModule } from "@angular/material";
import {RouterTestingModule} from "@angular/router/testing";
import {TransmissionService} from "../transmission.service";

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [MatProgressSpinnerModule, FormsModule, MatSnackBarModule, RouterTestingModule],
            providers: [TransmissionService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
