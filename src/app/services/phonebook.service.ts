import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {

	constructor(private __http: HttpClient) { }

	url = "http://localhost:3000/api/phonebook";

	addNewPhonebook(phonebook: any){
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			console.log(res);
		}, (err: any) => {
			console.warn (err);
		});
	}
}
