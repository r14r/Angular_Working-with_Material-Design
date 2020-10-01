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
	selector: 'app-a11y-snack-bar',
	templateUrl: 'snack-bar-a11y.html',
})
export class SnackBarAccessibilityDemoComponent {
	constructor(private theSnackbar: MatSnackBar) {}

	openDiscoPartySnackBar() {
		this.theSnackbar.open('Disco party!', 'Dismiss', { duration: 5000 });
	}

	openNotificationSnackBar() {
		this.theSnackbar.open('Thank you for your support!', '', { duration: 2000 });
	}
}
