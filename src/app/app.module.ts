import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {TransmissionService} from "./transmission.service";
import {AngularFilePickerModule} from "angular-file-picker";
import {MatIconModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes
        ),
        NgbModule.forRoot(),
        AngularFilePickerModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
    providers: [TransmissionService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
