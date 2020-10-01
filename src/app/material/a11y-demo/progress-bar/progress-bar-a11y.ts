/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-a11y-progress-bar',
	templateUrl: 'progress-bar-a11y.html',
})
export class ProgressBarAccessibilityDemoComponent {
	surveyProgress = 30;
	videoPlayValue = 20;
	videoBufferValue = 60;
}
