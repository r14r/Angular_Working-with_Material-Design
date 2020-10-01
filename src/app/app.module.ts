import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/app-header/component';
import { AppFooterComponent } from './components/app-footer/component';
import { AppSidemenuComponent } from './components/app-sidemenu/component';

import { HomePageComponent } from './pages/home/page';

import { DemoPageComponent } from './pages/demo/page';
import { HelperService } from './shared/helper.service';
import { AppSchematicsMaterialComponentsModule } from './material/schematics/schematics-components.module';
import { AddressFormComponent } from './material/schematics/address-form/component';
import { DashboardComponent } from './material/schematics/dashboard/component';
import { TreeComponent } from './material/schematics/tree/component';
import { TableComponent } from './material/schematics/table/table.component';
import { DragDropComponent } from './material/schematics/drag-drop/component';

@NgModule({
	declarations: [
		AppComponent,
		AppHeaderComponent,
		AppFooterComponent,
		AppSidemenuComponent,
		HomePageComponent,
		DemoPageComponent,
		AddressFormComponent,
		DashboardComponent,
		DragDropComponent,
		TreeComponent,
		TableComponent,
	],
	imports: [AppRoutingModule, BrowserModule, FormsModule, AppMaterialModule, BrowserAnimationsModule],
	entryComponents: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	private helper = new HelperService(this.constructor.name);

	constructor() {
		this.helper.log('constructor');
	}
}
