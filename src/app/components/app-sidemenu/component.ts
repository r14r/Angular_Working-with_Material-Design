import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/shared/helper.service';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './component.html',
	styleUrls: ['./component..scss '],
})
export class AppSidemenuComponent implements OnInit {
	private helper = new HelperService(this.constructor.name);

	// navItems = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

	pages = [
		{ name: 'Demo', url: 'demo' },
		{ name: 'Adress Form', url: 'material/address-form' },
	];

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');
	}
}
