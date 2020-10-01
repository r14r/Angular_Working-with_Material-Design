/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-a11y-app-dual-sidenav',
	templateUrl: 'dual-sidenav-a11y.html',
	styleUrls: ['shared.css', 'dual-sidenav-a11y.scss '],
	host: { class: 'demo-a11y-sidenav-app' },
})
export class SidenavDualAccessibilityDemoComponent {
	constructor(private theSnackbar: MatSnackBar) {}

	play(list: string) {
		this.theSnackbar.open(`Playing "${list}"`, '', { duration: 1000 });
	}
}
