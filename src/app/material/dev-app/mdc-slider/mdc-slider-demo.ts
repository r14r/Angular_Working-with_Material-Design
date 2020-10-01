/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-demo-mdc-slider',
	templateUrl: 'mdc-slider-demo.html',
})
export class MdcSliderDemoComponent {
	demo: number;
	val = 50;
	min = 0;
	max = 100;
	disabledValue = 0;
}
