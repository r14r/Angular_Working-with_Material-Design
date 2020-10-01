/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserData {
	name: string;
	color: string;
	age: number;
}

const exampleData = [
	{ name: 'Austin', color: 'blue', age: 30 },
	{ name: 'Jeremy', color: 'green', age: 33 },
	{ name: 'Kara', color: 'purple', age: 29 },
	{ name: 'Tina', color: 'yellow', age: 35 },
	{ name: 'Brad', color: 'pink', age: 40 },
	{ name: 'Jules', color: 'red', age: 21 },
];

export class BasicDataSource extends DataSource<UserData> {
	dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

	constructor() {
		super();
		this.dataChange.next(exampleData);
	}

	connect(): Observable<UserData[]> {
		return this.dataChange;
	}

	disconnect() {}
}

export class SortDataSource extends DataSource<UserData> {
	dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

	constructor(private theSort: MatSort) {
		super();
		this.dataChange.next(exampleData);
	}

	connect(): Observable<UserData[]> {
		const displayDataChanges = [this.dataChange, this.theSort.sortChange];

		return merge(...displayDataChanges).pipe(map(() => this.getSortedData()));
	}

	disconnect() {}

	getSortedData(): UserData[] {
		const data = [...exampleData];
		if (!this.theSort.active || this.theSort.direction === '') {
			return data;
		}

		return data.sort((a: UserData, b: UserData) => {
			return (a.age < b.age ? -1 : 1) * (this.theSort.direction === 'asc' ? 1 : -1);
		});
	}
}

export class PaginatedDataSource extends DataSource<UserData> {
	dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

	constructor(private thePaginator: MatPaginator) {
		super();
		this.dataChange.next(exampleData);
	}

	connect(): Observable<UserData[]> {
		const displayDataChanges = [this.dataChange, this.thePaginator.page];

		return merge(...displayDataChanges).pipe(
			map(() => {
				const data = [...exampleData];
				const startIndex = this.thePaginator.pageIndex * this.thePaginator.pageSize;
				return data.splice(startIndex, this.thePaginator.pageSize);
			}),
		);
	}

	disconnect() {}
}

@Component({
	selector: 'app-a11y-app-table',
	templateUrl: 'table-a11y.html',
	styleUrls: ['table-a11y.scss '],
})
export class TableAccessibilityDemoComponent implements OnInit {
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) pager: MatPaginator;

	displayedColumns = ['name', 'color', 'age'];
	basicDataSource: BasicDataSource;
	sortDataSource: SortDataSource;
	paginatedDataSource: PaginatedDataSource;

	ngOnInit(): void {
		this.basicDataSource = new BasicDataSource();
		this.sortDataSource = new SortDataSource(this.sort);
		this.paginatedDataSource = new PaginatedDataSource(this.pager);
	}
}
