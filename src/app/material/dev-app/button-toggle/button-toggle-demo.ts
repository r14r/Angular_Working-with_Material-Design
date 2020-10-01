/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-demo-button-toggle',
	templateUrl: 'button-toggle-demo.html',
	styleUrls: ['button-toggle-demo.scss '],
})
export class ButtonToggleDemoComponent {
	isVertical = false;
	isDisabled = false;
	favoritePie = 'Apple';
	pieOptions = ['Apple', 'Cherry', 'Pecan', 'Lemon'];
}
