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
	selector: 'app-a11y-icon',
	templateUrl: 'icon-a11y.html',
})
export class IconAccessibilityDemoComponent {
	constructor(private theSnackbar: MatSnackBar) {}

	deleteIcon() {
		this.theSnackbar.open('Item deleted', '', { duration: 2000 });
	}
}
