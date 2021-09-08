import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPhonebookEntryComponent } from './pages/new-phonebook-entry/new-phonebook-entry.component';
import { AllPhonebookEntriesComponent } from './pages/all-phonebook-entries/all-phonebook-entries.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/' },

	{ path: 'phonebook-update/:id', component: NewPhonebookEntryComponent },
	{ path: 'phonebook-entry', component: NewPhonebookEntryComponent },
	{ path: '', component: AllPhonebookEntriesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }