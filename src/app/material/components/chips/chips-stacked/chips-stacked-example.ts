import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
	name: string;
	color: ThemePalette;
}

/**
 * @title Stacked chips
 */
@Component({
	selector: 'app-demo-chips-stacked',
	templateUrl: 'chips-stacked-example.html',
	styleUrls: ['chips-stacked-example.scss '],
})
export class ChipsStackedExampleComponent {
	availableColors: ChipColor[] = [
		{ name: 'none', color: undefined },
		{ name: 'Primary', color: 'primary' },
		{ name: 'Accent', color: 'accent' },
		{ name: 'Warn', color: 'warn' },
	];
}
