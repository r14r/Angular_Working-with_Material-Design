/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

// TODO(josephperrott): Add an automatically filling example progress bar.

@Component({
	selector: 'app-demo-progress-bar',
	templateUrl: 'progress-bar-demo.html',
	styleUrls: ['progress-bar-demo.scss '],
})
export class ProgressBarDemoComponent {
	color: ThemePalette = 'primary';
	determinateProgressValue = 30;
	determinateAnimationEndValue: number;
	bufferAnimationEndValue: number;
	bufferProgressValue = 30;
	bufferBufferValue = 40;

	stepDeterminateProgressVal(val: number) {
		this.determinateProgressValue = this._clampValue(val + this.determinateProgressValue);
	}

	stepBufferProgressVal(val: number) {
		this.bufferProgressValue = this._clampValue(val + this.bufferProgressValue);
	}

	stepBufferBufferVal(val: number) {
		this.bufferBufferValue = this._clampValue(val + this.bufferBufferValue);
	}

	private _clampValue(value: number) {
		return Math.max(0, Math.min(100, value));
	}
}
