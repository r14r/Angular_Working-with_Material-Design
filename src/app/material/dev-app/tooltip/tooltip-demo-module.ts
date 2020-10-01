/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { TooltipExamplesModule } from '@angular/components-examples/material/tooltip';
import { RouterModule } from '@angular/router';
import { TooltipDemoComponent } from './tooltip-demo';

@NgModule({
	imports: [TooltipExamplesModule, RouterModule.forChild([{ path: '', component: TooltipDemoComponent }])],
	declarations: [TooltipDemoComponent],
})
export class TooltipDemoComponentModule {}
