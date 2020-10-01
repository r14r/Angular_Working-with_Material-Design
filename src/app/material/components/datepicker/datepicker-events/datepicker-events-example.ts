import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

/** @title Datepicker input and change events */
@Component({
	selector: 'app-demo-datepicker-events',
	templateUrl: 'datepicker-events-example.html',
	styleUrls: ['datepicker-events-example.scss '],
})
export class DatepickerEventsExampleComponent {
	events: string[] = [];

	addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
		this.events.push(`${type}: ${event.value}`);
	}
}
