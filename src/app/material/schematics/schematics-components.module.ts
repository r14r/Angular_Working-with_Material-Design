import { NgModule } from '@angular/core';

import { HelperService } from 'src/app/shared/helper.service';

import { AddressFormComponent } from './address-form/component';
import { DashboardComponent } from './dashboard/component';
import { DragDropComponent } from './drag-drop/component';
import { TreeComponent } from './tree/component';
import { TableComponent } from './table/table.component';

@NgModule({
	imports: [AddressFormComponent, DashboardComponent, DragDropComponent, TreeComponent, TableComponent],
	exports: [AddressFormComponent, DashboardComponent, DragDropComponent, TreeComponent, TableComponent],
})
export class AppSchematicsMaterialComponentsModule {
	private helper = new HelperService(this.constructor.name);

	constructor() {
		this.helper.log('constructor');
	}
}
