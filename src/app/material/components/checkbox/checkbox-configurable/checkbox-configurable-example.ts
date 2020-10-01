import { Component } from '@angular/core';

/**
 * @title Configurable checkbox
 */
@Component({
	selector: 'app-demo-checkbox-configurable',
	templateUrl: 'checkbox-configurable-example.html',
	styleUrls: ['checkbox-configurable-example.scss '],
})
export class CheckboxConfigurableExampleComponent {
	checked = false;
	indeterminate = false;
	labelPosition: 'before' | 'after' = 'after';
	disabled = false;
}
