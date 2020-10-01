import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelperService } from './shared/helper.service';

import { HomePageComponent } from './pages/home/page';
import { DemoPageComponent } from './pages/demo/page';

import { AddressFormComponent } from './blocks/materialdesign.schematics/address-form/component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'demo', component: DemoPageComponent },
	{ path: 'material/address-form', component: AddressFormComponent },

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
	private helper = new HelperService(this.constructor.name);

	constructor() {
		this.helper.log('constructor');
	}
}
