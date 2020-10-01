/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ComponentPortal, Portal, CdkPortal, DomPortal } from '@angular/cdk/portal';
import { Component, QueryList, ViewChildren, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-demo-portal',
	templateUrl: 'portal-demo.html',
	styleUrls: ['portal-demo.scss '],
})
export class PortalDemoComponent {
	@ViewChildren(CdkPortal) templatePortals: QueryList<Portal<any>>;
	@ViewChild('domPortalSource', { static: false }) domPortalSource: ElementRef<HTMLElement>;

	selectedPortal: Portal<any>;

	get programmingJoke() {
		return this.templatePortals.first;
	}

	get mathJoke() {
		return this.templatePortals.last;
	}

	get scienceJoke() {
		return new ComponentPortal(ScienceJoke);
	}

	get dadJoke() {
		return new DomPortal(this.domPortalSource);
	}
}

@Component({
	selector: 'science-joke',
	template: `
		<p>100 kilopascals go into a bar.</p>
	`,
})
export class ScienceJoke {}
