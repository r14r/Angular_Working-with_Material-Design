import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
	selector: 'app-bottom-sheet-overview-example-sheet',
	templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheetComponent {
	constructor(private theBottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>) {}

	openLink(event: MouseEvent): void {
		this.theBottomSheetRef.dismiss();
		event.preventDefault();
	}
}

@Component({
	selector: 'app-demo-bottom-sheet-overview',
	templateUrl: 'bottom-sheet-overview-example.html',
	styleUrls: ['bottom-sheet-overview-example.scss '],
})
export class BottomSheetOverviewExampleComponent {
	constructor(private theBottomSheet: MatBottomSheet) {}

	openBottomSheet(): void {
		this.theBottomSheet.open(BottomSheetOverviewExampleSheetComponent);
	}
}
