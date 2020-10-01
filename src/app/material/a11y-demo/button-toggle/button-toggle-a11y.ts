/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-a11y-button-toggle',
	templateUrl: 'button-toggle-a11y.html',
	styleUrls: ['button-toggle-a11y.scss '],
})
export class ButtonToggleAccessibilityDemoComponent {
	favoritePie = 'Apple';
	pieOptions = ['Apple', 'Cherry', 'Pecan', 'Lemon'];
}
