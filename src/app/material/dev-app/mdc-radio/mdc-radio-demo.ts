/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-demo-mdc-radio',
	templateUrl: 'mdc-radio-demo.html',
	styleUrls: ['mdc-radio-demo.scss '],
})
export class MdcRadioDemoComponent {
	isAlignEnd = false;
	isDisabled = false;
	isRequired = false;
	favoriteSeason: string = 'Autumn';
	seasonOptions = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
