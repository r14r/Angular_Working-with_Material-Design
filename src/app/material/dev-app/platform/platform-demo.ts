/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';
import { Platform, getSupportedInputTypes } from '@angular/cdk/platform';

@Component({
	selector: 'app-demo-platform',
	templateUrl: 'platform-demo.html',
})
export class PlatformDemoComponent {
	supportedInputTypes = getSupportedInputTypes();

	constructor(public platform: Platform) {}
}
