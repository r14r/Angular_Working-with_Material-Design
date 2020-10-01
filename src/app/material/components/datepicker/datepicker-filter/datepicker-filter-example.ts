import { Component } from '@angular/core';

/** @title Datepicker with filter validation */
@Component({
	selector: 'app-demo-datepicker-filter',
	templateUrl: 'datepicker-filter-example.html',
	styleUrls: ['datepicker-filter-example.scss '],
})
export class DatepickerFilterExampleComponent {
	myFilter = (d: Date | null): boolean => {
		const day = (d || new Date()).getDay();
		// Prevent Saturday and Sunday from being selected.
		return day !== 0 && day !== 6;
	};
}
