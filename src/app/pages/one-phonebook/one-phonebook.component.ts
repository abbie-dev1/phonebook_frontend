import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
	selector: 'app-one-phonebook',
	templateUrl: './one-phonebook.component.html',
	styleUrls: ['./one-phonebook.component.scss']
})
export class OnePhonebookComponent implements OnInit {

	constructor(private __route: ActivatedRoute, private __phonebook: PhonebookService) { }

	phonebook: any = {};

	ngOnInit(): void {
		this.load();
	}

	async load(){
		this.phonebook = await this.__phonebook.getOnePhonebook(this.__route.snapshot.params.id);
	}
}
