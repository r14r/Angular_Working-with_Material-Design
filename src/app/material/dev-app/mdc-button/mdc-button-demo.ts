/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-demo-mdc-button',
	templateUrl: 'mdc-button-demo.html',
	styleUrls: ['mdc-button-demo.scss '],
})
export class MdcButtonDemoComponent {
	isDisabled = false;
	clickCounter = 0;
	toggleDisable = false;
}
