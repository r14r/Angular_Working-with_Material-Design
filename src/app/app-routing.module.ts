import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelperService } from './shared/helper.service';

import { HomePageComponent } from './pages/home/page';
import { DemoPageComponent } from './pages/demo/page';

import { AddressFormComponent } from './material/schematics/address-form/component';
import { DashboardComponent } from './material/schematics/dashboard/component';
import { DragDropComponent } from './material/schematics/drag-drop/component';
import { TableComponent } from './material/schematics/table/table.component';
import { TreeComponent } from './material/schematics/tree/component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'demo', component: DemoPageComponent },

	{ path: 'schematics/address-form', component: AddressFormComponent },
	{ path: 'schematics/dashbard', component: DashboardComponent },
	{ path: 'schematics/dragdrop', component: DragDropComponent },
	{ path: 'schematics/table', component: TableComponent },
	{ path: 'schematics/tree', component: TreeComponent },

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
