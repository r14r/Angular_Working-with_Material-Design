/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

export interface Person {
	name: string;
}

export interface DemoColor {
	name: string;
	color: ThemePalette;
}

@Component({
	selector: 'app-demo-chips',
	templateUrl: 'chips-demo.html',
	styleUrls: ['chips-demo.scss '],
})
export class ChipsDemoComponent {
	tabIndex = 0;
	visible = true;
	color: ThemePalette;
	selectable = true;
	removable = true;
	addOnBlur = true;
	message = '';

	// Enter, comma, semi-colon
	separatorKeysCodes = [ENTER, COMMA, 186];

	selectedPeople = null;

	people: Person[] = [
		{ name: 'Kara' },
		{ name: 'Jeremy' },
		{ name: 'Topher' },
		{ name: 'Elad' },
		{ name: 'Kristiyan' },
		{ name: 'Paul' },
	];

	availableColors: DemoColor[] = [
		{ name: 'none', color: undefined },
		{ name: 'Primary', color: 'primary' },
		{ name: 'Accent', color: 'accent' },
		{ name: 'Warn', color: 'warn' },
	];

	selectedColors: string[] = ['Primary', 'Warn'];
	selectedColor = 'Accent';
	
	displayMessage(message: string): void {
		this.message = message;
	}

	add(event: MatChipInputEvent): void {
		const { input, value } = event;

		// Add our person
		if ((value || '').trim()) {
			this.people.push({ name: value.trim() });
		}

		// Reset the input value
		if (input) {
			input.value = '';
		}
	}

	remove(person: Person): void {
		const index = this.people.indexOf(person);

		if (index >= 0) {
			this.people.splice(index, 1);
		}
	}

	removeColor(color: DemoColor) {
		let index = this.availableColors.indexOf(color);

		if (index >= 0) {
			this.availableColors.splice(index, 1);
		}

		index = this.selectedColors.indexOf(color.name);

		if (index >= 0) {
			this.selectedColors.splice(index, 1);
		}
	}

	toggleVisible(): void {
		this.visible = false;
	}

}
