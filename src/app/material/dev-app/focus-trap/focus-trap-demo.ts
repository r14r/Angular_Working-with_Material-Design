/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { CdkTrapFocus } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { _supportsShadowDom } from '@angular/cdk/platform';

@Component({
	selector: 'app-demo-shadow-dom',
	template: '<ng-content></ng-content>',
	host: { class: 'demo-focus-trap-shadow-root' },
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class FocusTrapShadowDomDemoComponent {}

@Component({
	selector: 'app-demo-focus-trap',
	templateUrl: 'focus-trap-demo.html',
	styleUrls: ['focus-trap-demo.scss '],
})
export class FocusTrapDemo implements AfterViewInit {
	@ViewChild('newElements')
	private _newElements: ElementRef<HTMLElement>;

	@ViewChildren(CdkTrapFocus)
	private _focusTraps: QueryList<CdkTrapFocus>;

	_supportsShadowDom = _supportsShadowDom();

	constructor(public dialog: MatDialog) {}

	ngAfterViewInit() {
		// We want all the traps to be disabled by default, but doing so while using the value in
		// the view will result in "changed after checked" errors so we defer it to the next tick.
		setTimeout(() => {
			this._focusTraps.forEach(trap => (trap.enabled = false));
		});
	}

	toggleFocus(instance: CdkTrapFocus) {
		instance.enabled = !instance.enabled;
		if (instance.enabled) {
			instance.focusTrap.focusInitialElementWhenReady();
		}
	}

	addNewElement() {
		const textarea = document.createElement('textarea');
		textarea.setAttribute('placeholder', 'I am a new element!');
		this._newElements.nativeElement.appendChild(textarea);
	}

	openDialog() {
		this.dialog.open(FocusTrapDialogDemo);
	}
}

let dialogCount = 0;

@Component({
	selector: 'app-demo-focus-trap-dialog',
	styleUrls: ['focus-trap-dialog-demo.scss '],
	templateUrl: 'focus-trap-dialog-demo.html',
})
export class FocusTrapDialogDemoComponent {
	id = dialogCount++;
	constructor(public dialog: MatDialog) {}

	openAnotherDialog() {
		this.dialog.open(FocusTrapDialogDemo);
	}
}
