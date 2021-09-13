
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NewPhonebookEntryComponent } from './pages/new-phonebook-entry/new-phonebook-entry.component';
import { AllPhonebookEntriesComponent } from './pages/all-phonebook-entries/all-phonebook-entries.component';

// =============================================================== External Dependencies ===============================================================
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { OnePhonebookComponent } from './pages/one-phonebook/one-phonebook.component';


@NgModule({
	declarations: [
		AppComponent,
		NewPhonebookEntryComponent,
		AllPhonebookEntriesComponent,
  OnePhonebookComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MDBBootstrapModule.forRoot(),
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ToastrModule.forRoot({
			positionClass: 'toast-top-center',
			resetTimeoutOnDuplicate: true,
			preventDuplicates: true,
			tapToDismiss: true,
			progressBar: true,
			closeButton: true,
			timeOut: 2000,
		}),
		NgxUiLoaderModule.forRoot({
			overlayColor: "rgba(0,0,0,0.85)",
			logoPosition: "center-center",
			textPosition: "center-center",
			bgsPosition: "center-center",
			fgsPosition: "center-center",
			bgsType: "wandering-cubes",
			masterLoaderId: "master",
			overlayBorderRadius: "0",
			fgsType: "three-strings",
			hasProgressBar: false,
			textColor: "#33b5e5",
			bgsColor: "#33b5e5",
			fgsColor: "#33b5e5",
			pbDirection: "ltr",
			pbColor: "#33b5e5",
			text: "Loading...",
			fastFadeOut: true,
			bgsOpacity: 0.4,
			pbThickness: 3,
			logoSize: 120,
			bgsSize: 80,
			logoUrl: "",
			fgsSize: 80,
			delay: 0,
			blur: 15,
			gap: 10,
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
