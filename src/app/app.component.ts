import { Component, Optional, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { HelperService } from './shared/helper.service';
import { ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component..scss '],
})
export class AppComponent implements OnInit, OnDestroy {
	private helper = new HelperService(this.constructor.name);

	/*
	shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
		h.test(window.location.host),
	);
    */
	shouldRun = true;

	mobileQuery: MediaQueryList;

	pages = [
		{ name: 'Demo', url: 'demo' },
		{ name: 'Adress Form', url: 'material/address-form' },
	];

	pagesDemo = [
		{ url: 'schematics/address-form', name: 'AddressForm' },
		{ url: 'schematics/dashbard', name: 'Dashboard' },
		{ url: 'schematics/dragdrop', name: 'DragDrop' },
		{ url: 'schematics/table', name: 'Table' },
		{ url: 'schematics/tree', name: 'Tree' },
	];

	fillerContent = Array.from({ length: 50 }, () => ' Lorem ipsum dolor sit amet');

	private theMobileQueryListener: () => void;

	constructor(route: ActivatedRoute, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.helper.log('constructor');

		this.theMobileQueryListener = () => changeDetectorRef.detectChanges();

		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQuery.addListener(this.theMobileQueryListener);
	}

	ngOnInit() {}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this.theMobileQueryListener);
	}
}
