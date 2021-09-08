import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {

	constructor(private __http: HttpClient, private __route: Router, private __activateRoute: ActivatedRoute) { }

	url = environment.url;
	other_errors: any = {};
	form_errors: any = {};

	addNewPhonebook(phonebook: any){
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			this.__route.navigate(['/']);
		}, (err: any) => {
			if (err.error.errors) this.form_errors = err.error.errors;
			this.showOtherErrors(err.error);
			setTimeout(() => {
				this.form_errors = {};
			}, 2000);
		});
	}

	async getAllPhonebooks(){
		return await this.__http.get(`${this.url}`).toPromise();
	}

	async getOnePhonebook(phonebookId: string){
		return await this.__http.get(`${this.url}/${phonebookId}`).toPromise();
	}

	updateOnePhonebook(phonebook: any){
		return this.__http.patch(`${this.url}/${phonebook.id}`, phonebook).subscribe((res: any) => {
			this.__route.navigate(['/']);
		}, (err: any) => {
			console.warn(err);
			if (err.error.errors) this.form_errors = err.error.errors;
			this.showOtherErrors(err.error);
			setTimeout(() => {
				this.form_errors = {};
			}, 2000);
		});
	}

	deleteOnePhonebook(phonebookId: string){
		return this.__http.delete(`${this.url}/${phonebookId}`).subscribe((res: any) => {
			location.reload();
		}, (err: any) => {
			if (err.error.errors) this.form_errors = err.error.errors;
			this.showOtherErrors(err.error);
			setTimeout(() => {
				this.form_errors = {};
			}, 2000);
		});
	}

	async searchPhonebook(search_text: string){
		return await this.__http.get(`${this.url}/search?s=${search_text}`).toPromise();
	}

	showOtherErrors(error: any){
		this.other_errors = error;
		setTimeout(() => {
			this.other_errors = {}
		}, 2000)
	}
}
