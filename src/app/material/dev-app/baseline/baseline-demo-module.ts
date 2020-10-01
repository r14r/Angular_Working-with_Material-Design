import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { BaselineDemoComponent } from './baseline-demo';

@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatSelectModule,
		MatToolbarModule,
		RouterModule.forChild([{ path: '', component: BaselineDemoComponent }]),
	],
	declarations: [BaselineDemoComponent],
})
export class BaselineDemoComponentModule {}
