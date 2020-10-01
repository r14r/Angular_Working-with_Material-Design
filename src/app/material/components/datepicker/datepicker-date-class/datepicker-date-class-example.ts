import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

/** @title Datepicker with custom date classes */
@Component({
	selector: 'app-demo-datepicker-date-class',
	templateUrl: 'datepicker-date-class-example.html',
	styleUrls: ['datepicker-date-class-example.scss '],
	encapsulation: ViewEncapsulation.None,
})
export class DatepickerDateClassExampleComponent {
	dateClass = (d: Date): MatCalendarCellCssClasses => {
		const date = d.getDate();

		// Highlight the 1st and 20th day of each month.
		return date === 1 || date === 20 ? 'example-custom-date-class' : '';
	};
}
