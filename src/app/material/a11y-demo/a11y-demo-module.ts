import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccessibilityDemoHome, AccessibilityDemoComponent } from './a11y-demo';
import { ACCESSIBILITY_DEMO_ROUTES } from './a11y-demo-routes';
import { DemoMaterialModule } from './a11y-material-module';
import { AutocompleteAccessibilityDemoComponent } from './autocomplete/autocomplete-a11y';
import { ButtonToggleAccessibilityDemoComponent } from './button-toggle/button-toggle-a11y';
import { ButtonAccessibilityDemoComponent } from './button/button-a11y';
import { CardAccessibilityDemoComponent } from './card/card-a11y';
import { CheckboxAccessibilityDemoComponent } from './checkbox/checkbox-a11y';
import { ChipsAccessibilityDemoComponent } from './chips/chips-a11y';
import { DatepickerAccessibilityDemoComponent } from './datepicker/datepicker-a11y';
import {
	DialogAccessibilityDemoComponent,
	DialogAddressFormDialog,
	DialogFruitExampleDialog,
	DialogNeptuneExampleDialog,
	DialogNeptuneIFrameDialog,
	DialogWelcomeExampleDialog,
} from './dialog/dialog-a11y';
import { ExpansionPanelAccessibilityDemoComponent } from './expansion/expansion-a11y';
import { GridListAccessibilityDemoComponent } from './grid-list/grid-list-a11y';
import { IconAccessibilityDemoComponent } from './icon/icon-a11y';
import { InputAccessibilityDemoComponent } from './input/input-a11y';
import { ListAccessibilityDemoComponent } from './list/list-a11y';
import { MenuAccessibilityDemoComponent } from './menu/menu-a11y';
import { ProgressBarAccessibilityDemoComponent } from './progress-bar/progress-bar-a11y';
import { ProgressSpinnerAccessibilityDemoComponent } from './progress-spinner/progress-spinner-a11y';
import { RadioAccessibilityDemoComponent } from './radio/radio-a11y';
import { SelectAccessibilityDemoComponent } from './select/select-a11y';
import { SidenavBasicAccessibilityDemoComponent } from './sidenav/basic-sidenav-a11y';
import { SidenavDualAccessibilityDemoComponent } from './sidenav/dual-sidenav-a11y';
import { SidenavMobileAccessibilityDemoComponent } from './sidenav/mobile-sidenav-a11y';
import { SidenavAccessibilityDemoComponent } from './sidenav/sidenav-a11y';
import { SlideToggleAccessibilityDemoComponent } from './slide-toggle/slide-toggle-a11y';
import { SliderAccessibilityDemoComponent } from './slider/slider-a11y';
import { SnackBarAccessibilityDemoComponent } from './snack-bar/snack-bar-a11y';
import { TableAccessibilityDemoComponent } from './table/table-a11y';
import { FoggyTabContent, RainyTabContent, SunnyTabContent, TabsAccessibilityDemoComponent } from './tabs/tabs-a11y';
import { ToolbarAccessibilityDemoComponent } from './toolbar/toolbar-a11y';
import { TooltipAccessibilityDemoComponent } from './tooltip/tooltip-a11y';

@NgModule({
	imports: [RouterModule.forChild(ACCESSIBILITY_DEMO_ROUTES)],
	exports: [RouterModule],
})
export class AccessibilityRoutingModule {}

@NgModule({
	imports: [AccessibilityRoutingModule, CommonModule, DemoMaterialModule, FormsModule, ReactiveFormsModule],
	declarations: [
		AccessibilityDemoHome,
		AccessibilityDemoComponent,
		AutocompleteAccessibilityDemoComponent,
		ButtonAccessibilityDemoComponent,
		ButtonToggleAccessibilityDemoComponent,
		CardAccessibilityDemoComponent,
		CheckboxAccessibilityDemoComponent,
		ChipsAccessibilityDemoComponent,
		DatepickerAccessibilityDemoComponent,
		DialogAccessibilityDemoComponent,
		DialogAddressFormDialog,
		DialogFruitExampleDialog,
		DialogNeptuneExampleDialog,
		DialogNeptuneIFrameDialog,
		DialogWelcomeExampleDialog,
		ExpansionPanelAccessibilityDemoComponent,
		FoggyTabContent,
		GridListAccessibilityDemoComponent,
		IconAccessibilityDemoComponent,
		InputAccessibilityDemoComponent,
		ListAccessibilityDemoComponent,
		MenuAccessibilityDemoComponent,
		ProgressBarAccessibilityDemoComponent,
		ProgressSpinnerAccessibilityDemoComponent,
		RadioAccessibilityDemoComponent,
		RainyTabContent,
		SelectAccessibilityDemoComponent,
		SidenavAccessibilityDemoComponent,
		SidenavBasicAccessibilityDemoComponent,
		SidenavDualAccessibilityDemoComponent,
		SidenavMobileAccessibilityDemoComponent,
		SlideToggleAccessibilityDemoComponent,
		SliderAccessibilityDemoComponent,
		SnackBarAccessibilityDemoComponent,
		SunnyTabContent,
		TableAccessibilityDemoComponent,
		TabsAccessibilityDemoComponent,
		ToolbarAccessibilityDemoComponent,
		TooltipAccessibilityDemoComponent,
	],
})
export class AccessibilityDemoComponentModule {}
