import { Component } from '@angular/core';

/** @title Datepicker start date */
@Component({
	selector: 'app-demo-datepicker-start-view',
	templateUrl: 'datepicker-start-view-example.html',
	styleUrls: ['datepicker-start-view-example.scss '],
})
export class DatepickerStartViewExampleComponent {
	startDate = new Date(1990, 0, 1);
}
