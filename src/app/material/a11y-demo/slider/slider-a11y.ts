/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-a11y-slider',
	templateUrl: 'slider-a11y.html',
	styleUrls: ['slider-a11y.scss '],
})
export class SliderAccessibilityDemoComponent {
	red = 0;
	green = 0;
	blue = 0;

	get swatchBackground() {
		return `rgb(${this.red}, ${this.green}, ${this.blue})`;
	}
}
