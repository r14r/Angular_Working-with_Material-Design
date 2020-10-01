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
	selector: 'app-a11y-card',
	templateUrl: 'card-a11y.html',
	styleUrls: ['card-a11y.scss '],
})
export class CardAccessibilityDemoComponent {
	showProgress = false;

	constructor(private theSnackbar: MatSnackBar) {}

	openSnackbar(message: string) {
		this.theSnackbar.open(message, '', { duration: 2000 });
	}
}
