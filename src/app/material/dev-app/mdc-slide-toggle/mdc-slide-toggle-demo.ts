/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-demo-mdc-slide-toggle',
	templateUrl: 'mdc-slide-toggle-demo.html',
	styleUrls: ['mdc-slide-toggle-demo.scss '],
})
export class MdcSlideToggleDemoComponent {
	firstToggle: boolean;

	onFormSubmit() {
		alert(`You submitted the form.`);
	}
}
