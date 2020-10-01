/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material-experimental/mdc-slider';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MdcSliderDemoComponent } from './mdc-slider-demo';

@NgModule({
	imports: [FormsModule, MatSliderModule, MatTabsModule, RouterModule.forChild([{ path: '', component: MdcSliderDemoComponent }])],
	declarations: [MdcSliderDemoComponent],
})
export class MdcSliderDemoComponentModule {}
