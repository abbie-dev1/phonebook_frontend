import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
	selector: 'app-new-phonebook-entry',
	templateUrl: './new-phonebook-entry.component.html',
	styleUrls: ['./new-phonebook-entry.component.scss']
})
export class NewPhonebookEntryComponent implements OnInit {

	constructor(public __phonebook: PhonebookService, private __activatedRoute: ActivatedRoute, private __route: Router) { }

	phonebookForm = new FormGroup({
		name: new FormControl(''),
		phone: new FormControl(''),
		email: new FormControl(''),
		id: new FormControl(''),
	})

	phonebookId: any;

	ngOnInit(): void {
		this.load();
	}

	async load(){
		let phonebook: any = {};
		this.phonebookId = this.__activatedRoute.snapshot.params;
		
		if (!this.phonebookId.id) return;

		await this.__phonebook.getOnePhonebook(this.phonebookId.id).then((res: any) => {
			phonebook = res;
		}).catch((err: any) => {
			this.__phonebook.showError(err.error.message);
			setTimeout(() => {
				this.__route.navigate(['/']);
			}, 1000);
		})

		this.phonebookForm.patchValue(phonebook);
		
	}

	submitPhoneBootEntry(){
		if (this.phonebookForm.value.email.trim() === "") delete this.phonebookForm.value.email;
		if (!this.phonebookId.id) return this.__phonebook.addNewPhonebook(this.phonebookForm.value);
		return this.__phonebook.updateOnePhonebook(this.phonebookForm.value);
	}
}
