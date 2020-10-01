/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-demo-progress-spinner',
	templateUrl: 'progress-spinner-demo.html',
	styleUrls: ['progress-spinner-demo.scss '],
})
export class ProgressSpinnerDemoComponent {
	progressValue = 60;
	color: ThemePalette = 'primary';
	isDeterminate = true;

	step(val: number) {
		this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
	}
}
