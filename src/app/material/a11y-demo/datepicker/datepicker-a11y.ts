/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-a11y-datepicker',
	templateUrl: 'datepicker-a11y.html',
	styleUrls: ['datepicker-a11y.scss '],
})
export class DatepickerAccessibilityDemoComponent {
	birthday: Date;
	maxBirthday = new Date();

	paymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
	minPaymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);

	departDate: Date;
	returnDate: Date;
	minTripDate = new Date();
	maxTripDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
	startTripDate = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);

	appointmentDate: Date;
	minAppointmentDate = new Date();
	maxAppointmentDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
	weekdaysOnly = (d: Date | null) => d !== null && d.getDay() != 0 && d.getDay() != 6;
}
