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
	selector: 'app-a11y-slide-toggle',
	templateUrl: 'slide-toggle-a11y.html',
})
export class SlideToggleAccessibilityDemoComponent {
	emailToggle = true;
	termsToggle = false;
	musicToggle = false;

	constructor(private theSnackBar: MatSnackBar) {}

	onFormSubmit() {
		this.theSnackBar.open('Terms and condistions accepted!', '', { duration: 2000 });
	}
}
