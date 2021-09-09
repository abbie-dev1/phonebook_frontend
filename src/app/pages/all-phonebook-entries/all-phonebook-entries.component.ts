import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
	selector: 'app-all-phonebook-entries',
	templateUrl: './all-phonebook-entries.component.html',
	styleUrls: ['./all-phonebook-entries.component.scss']
})
export class AllPhonebookEntriesComponent implements OnInit {

	constructor(public __phonebook: PhonebookService, private __loader: NgxUiLoaderService) { }

	phonebooks: any = [];
	search: string;

	ngOnInit(): void {
		this.load();
	}

	async load(){
		this.__loader.start();
		await this.__phonebook.getAllPhonebooks().then((res: any) => {
			this.phonebooks = res;
			setTimeout(() => {
				this.__loader.stop();
				if (this.__phonebook.success_message) this.__phonebook.showSuccess(this.__phonebook.success_message);
				this.__phonebook.success_message = "";
			}, 1000);
		});
	}

	deleteContact(contact: any){
		this.__phonebook.deleteOnePhonebook(contact.id);
	}

	async searchContact(search_text: string){
		this.phonebooks = await this.__phonebook.searchPhonebook(search_text);
	}
}
