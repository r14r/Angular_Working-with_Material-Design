import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Datepicker selected value */
@Component({
	selector: 'app-demo-datepicker-value',
	templateUrl: 'datepicker-value-example.html',
	styleUrls: ['datepicker-value-example.scss '],
})
export class DatepickerValueExampleComponent {
	date = new FormControl(new Date());
	serializedDate = new FormControl(new Date().toISOString());
}
