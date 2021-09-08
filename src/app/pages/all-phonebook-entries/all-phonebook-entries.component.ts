import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
	selector: 'app-all-phonebook-entries',
	templateUrl: './all-phonebook-entries.component.html',
	styleUrls: ['./all-phonebook-entries.component.scss']
})
export class AllPhonebookEntriesComponent implements OnInit {

	constructor(public __phonebook: PhonebookService) { }

	phonebooks: any = [];
	search: string;

	ngOnInit(): void {
		this.load();
	}

	async load(){
		this.phonebooks = await this.__phonebook.getAllPhonebooks();
	}

	deleteContact(contact: any){
		this.__phonebook.deleteOnePhonebook(contact.id);
	}

	async searchContact(search_text: string){
		this.phonebooks = await this.__phonebook.searchPhonebook(search_text);
	}
}
