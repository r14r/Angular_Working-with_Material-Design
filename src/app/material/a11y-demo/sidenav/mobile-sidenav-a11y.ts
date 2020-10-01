/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-a11y-app-mobile-sidenav',
	templateUrl: 'mobile-sidenav-a11y.html',
	styleUrls: ['shared.css', 'mobile-sidenav-a11y.scss '],
	host: { class: 'demo-a11y-sidenav-app' },
})
export class SidenavMobileAccessibilityDemoComponent implements OnDestroy {
	mobileQuery: MediaQueryList;

	filler = Array(20).fill(0);

	theMobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.theMobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQuery.addListener(this.theMobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this.theMobileQueryListener);
	}
}
