/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { TabGroupExamplesModule } from '@angular/components-examples/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TabsDemoComponent } from './tabs-demo';

@NgModule({
	imports: [TabGroupExamplesModule, MatTabsModule, RouterModule.forChild([{ path: '', component: TabsDemoComponent }])],
	declarations: [TabsDemoComponent],
})
export class TabsDemoComponentModule {}
