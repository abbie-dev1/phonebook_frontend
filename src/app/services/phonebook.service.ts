import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {

	constructor(private __http: HttpClient, private __route: Router, private __toast: ToastrService) { }

	success_message: string = "";
	url = environment.url;
	form_errors: any = {};

	addNewPhonebook(phonebook: any){
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			this.success_message = "Contact Added";
			this.__route.navigate(['/']);
		}, (err: any) => {
			if (err.error.errors) return this.form_errors = err.error.errors;
			this.showError(err.error.message);
			setTimeout(() => {
				this.form_errors = {};
			}, 1000);
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
			this.success_message = "Contact Updated!";
			this.__route.navigate(['/']);
		}, (err: any) => {
			console.warn(err.error);
			if (err.error.errors) return this.form_errors = err.error.errors;
			this.showError(err.error.message);
			setTimeout(() => {
				this.form_errors = {};
			}, 1000);
		});
	}

	deleteOnePhonebook(phonebookId: string){
		return this.__http.delete(`${this.url}/${phonebookId}`).subscribe((res: any) => {
			this.__toast.warning("Contact Deleted!", "Warning");
			setTimeout(() => {
				location.reload();
			}, 1000);
		}, (err: any) => {
			if (err.error.errors) return this.form_errors = err.error.errors;
			this.showError(err.error.message);
			setTimeout(() => {
				this.form_errors = {};
			}, 1000);
		});
	}

	async searchPhonebook(search_text: string){
		return await this.__http.get(`${this.url}/search?s=${search_text}`).toPromise();
	}

	showSuccess(message: string){
		this.__toast.success(message, "Successful");
	}

	showError(message: string){
		this.__toast.error(message, "Error");
	}
}
