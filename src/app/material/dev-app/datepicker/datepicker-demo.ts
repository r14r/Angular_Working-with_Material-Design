/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, Optional, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats, ThemePalette } from '@angular/material/core';
import { MatCalendar, MatCalendarHeader, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-demo-datepicker',
	templateUrl: 'datepicker-demo.html',
	styleUrls: ['datepicker-demo.scss '],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerDemoComponent {
	touch: boolean;
	filterOdd: boolean;
	yearView: boolean;
	inputDisabled: boolean;
	datepickerDisabled: boolean;
	minDate: Date;
	maxDate: Date;
	startAt: Date;
	date: any;
	lastDateInput: Date | null;
	lastDateChange: Date | null;
	color: ThemePalette;

	dateCtrl = new FormControl();

	dateFilter: (date: Date | null) => boolean = (date: Date | null) => {
		if (date === null) {
			return true;
		}
		return !(date.getFullYear() % 2) && Boolean(date.getMonth() % 2) && !(date.getDate() % 2);
	};

	onDateInput = (e: MatDatepickerInputEvent<Date>) => (this.lastDateInput = e.value);
	onDateChange = (e: MatDatepickerInputEvent<Date>) => (this.lastDateChange = e.value);

	// pass custom header component type as input
	customHeader = CustomHeader;
	customHeaderNgContent = CustomHeaderNgContent;
}

// Custom header component for datepicker
@Component({
	selector: 'custom-header',
	templateUrl: 'custom-header.html',
	styleUrls: ['custom-header.scss '],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeader<D> implements OnDestroy {
	private theDestroyed = new Subject<void>();

	constructor(
		private _calendar: MatCalendar<D>,
		private _dateAdapter: DateAdapter<D>,
		@Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
		cdr: ChangeDetectorRef,
	) {
		_calendar.stateChanges.pipe(takeUntil(this.theDestroyed)).subscribe(() => cdr.markForCheck());
	}

	ngOnDestroy() {
		this.theDestroyed.next();
		this.theDestroyed.complete();
	}

	get periodLabel() {
		return this._dateAdapter.format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
	}

	previousClicked(mode: 'month' | 'year') {
		this._calendar.activeDate =
			mode === 'month'
				? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
				: this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
	}

	nextClicked(mode: 'month' | 'year') {
		this._calendar.activeDate =
			mode === 'month'
				? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
				: this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
	}
}

@Component({
	selector: 'customer-header-ng-content',
	template: `
		<mat-calendar-header #header>
			<button mat-button type="button" (click)="todayClicked()">TODAY</button>
		</mat-calendar-header>
	`,
})
export class CustomHeaderNgContent<D> {
	@ViewChild(MatCalendarHeader)
	header: MatCalendarHeader<D>;

	constructor(@Optional() private _dateAdapter: DateAdapter<D>) {}

	todayClicked() {
		let calendar = this.header.calendar;

		calendar.activeDate = this._dateAdapter.today();
		calendar.currentView = 'month';
	}
}
