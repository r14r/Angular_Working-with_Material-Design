/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { DrawerDemoComponent } from './drawer-demo';

@NgModule({
	imports: [MatButtonModule, MatListModule, MatSidenavModule, RouterModule.forChild([{ path: '', component: DrawerDemoComponent }])],
	declarations: [DrawerDemoComponent],
})
export class DrawerDemoComponentModule {}
