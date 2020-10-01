/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { CommonModule } from '@angular/common';
import { MdcFormFieldExamplesModule } from '@angular/components-examples/material-experimental/mdc-form-field';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatInputModule } from '@angular/material-experimental/mdc-input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MdcInputDemoComponent } from './mdc-input-demo';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatTabsModule,
		MatToolbarModule,
		MdcFormFieldExamplesModule,
		ReactiveFormsModule,
		RouterModule.forChild([{ path: '', component: MdcInputDemoComponent }]),
	],
	declarations: [MdcInputDemoComponent],
})
export class MdcInputDemoComponentModule {}
