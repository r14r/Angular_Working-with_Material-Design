/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-demo-mdc-menu',
	templateUrl: 'mdc-menu-demo.html',
	styleUrls: ['mdc-menu-demo.scss '],
})
export class MdcMenuDemoComponent {
	selected = '';
	items = [{ text: 'Refresh' }, { text: 'Settings' }, { text: 'Help', disabled: true }, { text: 'Sign Out' }];

	iconItems = [
		{ text: 'Redial', icon: 'dialpad' },
		{ text: 'Check voicemail', icon: 'voicemail', disabled: true },
		{ text: 'Disable alerts', icon: 'notifications_off' },
	];

	select(text: string) {
		this.selected = text;
	}
}
