import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
	selector: 'app-demo-autocomplete-simple',
	templateUrl: 'autocomplete-simple-example.html',
	styleUrls: ['autocomplete-simple-example.scss '],
})
export class AutocompleteSimpleExampleComponent {
	myControl = new FormControl();
	options: string[] = ['One', 'Two', 'Three'];
}
