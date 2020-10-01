/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
	selector: 'app-demo-focus-origin',
	templateUrl: 'focus-origin-demo.html',
	styleUrls: ['focus-origin-demo.scss '],
})
export class FocusOriginDemoComponent {
	constructor(public fom: FocusMonitor) {}
}
