/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-demo-mdc-tabs',
	templateUrl: 'mdc-tabs-demo.html',
	styleUrls: ['mdc-tabs-demo.scss '],
})
export class MdcTabsDemoComponent {
	fitInkBarToContent = true;
	links = ['First', 'Second', 'Third'];
	lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
	activeLink = this.links[0];
}
