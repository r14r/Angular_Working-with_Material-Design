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
	selector: 'app-a11y-button',
	templateUrl: 'button-a11y.html',
	styleUrls: ['button-a11y.scss '],
})
export class ButtonAccessibilityDemoComponent {
	counter = 0;

	constructor(public snackBar: MatSnackBar) {}

	openSnackBar(message: string) {
		this.snackBar.open(message, '', {
			duration: 2000,
		});
	}

	increase() {
		this.counter++;
		this.openSnackBar(`Click counter is set to ${this.counter}`);
	}
}
