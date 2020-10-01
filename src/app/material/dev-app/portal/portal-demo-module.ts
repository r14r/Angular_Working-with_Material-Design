/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalComponent, ScienceJoke } from './portal-demo';

@NgModule({
	imports: [PortalModule, RouterModule.forChild([{ path: '', component: PortalDemoComponent }])],
	declarations: [PortalDemoComponent, ScienceJoke],
})
export class PortalDemoComponentModule {}
