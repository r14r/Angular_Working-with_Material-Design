import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

export interface Vegetable {
	name: string;
}

/**
 * @title Chips Drag and Drop
 */
@Component({
	selector: 'app-demo-chips-drag-drop',
	templateUrl: 'chips-drag-drop-example.html',
	styleUrls: ['chips-drag-drop-example.scss '],
})
export class ChipsDragDropExampleComponent {
	vegetables: Vegetable[] = [
		{ name: 'apple' },
		{ name: 'banana' },
		{ name: 'strawberry' },
		{ name: 'orange' },
		{ name: 'kiwi' },
		{ name: 'cherry' },
	];

	drop(event: CdkDragDrop<Vegetable[]>) {
		moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
	}
}
