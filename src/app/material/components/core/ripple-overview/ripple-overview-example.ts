import { Component } from '@angular/core';

/**
 * @title MatRipple basic usage
 */
@Component({
	selector: 'app-demo-ripple-overview',
	templateUrl: 'ripple-overview-example.html',
	styleUrls: ['ripple-overview-example.scss '],
})
export class RippleOverviewExampleComponent {
	centered = false;
	disabled = false;
	unbounded = false;

	radius: number;
	color: string;
}
