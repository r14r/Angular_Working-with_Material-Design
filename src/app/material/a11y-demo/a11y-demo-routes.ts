/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Routes } from '@angular/router';
import { AutocompleteAccessibilityDemoComponent } from './autocomplete/autocomplete-a11y';
import { ButtonAccessibilityDemoComponent } from './button/button-a11y';
import { ButtonToggleAccessibilityDemoComponent } from './button-toggle/button-toggle-a11y';
import { CardAccessibilityDemoComponent } from './card/card-a11y';
import { CheckboxAccessibilityDemoComponent } from './checkbox/checkbox-a11y';
import { ChipsAccessibilityDemoComponent } from './chips/chips-a11y';
import { DialogAccessibilityDemoComponent } from './dialog/dialog-a11y';
import { ExpansionPanelAccessibilityDemoComponent } from './expansion/expansion-a11y';
import { GridListAccessibilityDemoComponent } from './grid-list/grid-list-a11y';
import { RadioAccessibilityDemoComponent } from './radio/radio-a11y';
import { AccessibilityDemoHome } from './a11y-demo';
import { ToolbarAccessibilityDemoComponent } from './toolbar/toolbar-a11y';
import { DatepickerAccessibilityDemoComponent } from './datepicker/datepicker-a11y';
import { IconAccessibilityDemoComponent } from './icon/icon-a11y';
import { InputAccessibilityDemoComponent } from './input/input-a11y';
import { ListAccessibilityDemoComponent } from './list/list-a11y';
import { MenuAccessibilityDemoComponent } from './menu/menu-a11y';
import { ProgressBarAccessibilityDemoComponent } from './progress-bar/progress-bar-a11y';
import { ProgressSpinnerAccessibilityDemoComponent } from './progress-spinner/progress-spinner-a11y';
import { SliderAccessibilityDemoComponent } from './slider/slider-a11y';
import { SlideToggleAccessibilityDemoComponent } from './slide-toggle/slide-toggle-a11y';
import { SnackBarAccessibilityDemoComponent } from './snack-bar/snack-bar-a11y';
import { SelectAccessibilityDemoComponent } from './select/select-a11y';
import { TableAccessibilityDemoComponent } from './table/table-a11y';
import { TabsAccessibilityDemoComponent } from './tabs/tabs-a11y';
import { TABS_DEMO_ROUTES } from './tabs/routes';
import { TooltipAccessibilityDemoComponent } from './tooltip/tooltip-a11y';
import { SidenavAccessibilityDemoComponent } from './sidenav/sidenav-a11y';
import { SidenavBasicAccessibilityDemoComponent } from './sidenav/basic-sidenav-a11y';
import { SidenavDualAccessibilityDemoComponent } from './sidenav/dual-sidenav-a11y';
import { SidenavMobileAccessibilityDemoComponent } from './sidenav/mobile-sidenav-a11y';

export const ACCESSIBILITY_DEMO_ROUTES: Routes = [
	{ path: '', component: AccessibilityDemoComponentHome },
	{ path: 'autocomplete', component: AutocompleteAccessibilityDemoComponent },
	{ path: 'button', component: ButtonAccessibilityDemoComponent },
	{ path: 'button-toggle', component: ButtonToggleAccessibilityDemoComponent },
	{ path: 'card', component: CardAccessibilityDemoComponent },
	{ path: 'checkbox', component: CheckboxAccessibilityDemoComponent },
	{ path: 'chips', component: ChipsAccessibilityDemoComponent },
	{ path: 'datepicker', component: DatepickerAccessibilityDemoComponent },
	{ path: 'dialog', component: DialogAccessibilityDemoComponent },
	{ path: 'expansion', component: ExpansionPanelAccessibilityDemoComponent },
	{ path: 'grid-list', component: GridListAccessibilityDemoComponent },
	{ path: 'icon', component: IconAccessibilityDemoComponent },
	{ path: 'input', component: InputAccessibilityDemoComponent },
	{ path: 'list', component: ListAccessibilityDemoComponent },
	{ path: 'menu', component: MenuAccessibilityDemoComponent },
	{ path: 'progress-bar', component: ProgressBarAccessibilityDemoComponent },
	{ path: 'progress-spinner', component: ProgressSpinnerAccessibilityDemoComponent },
	{ path: 'radio', component: RadioAccessibilityDemoComponent },
	{ path: 'select', component: SelectAccessibilityDemoComponent },
	{ path: 'sidenav', component: SidenavAccessibilityDemoComponent },
	{ path: 'sidenav/basic', component: SidenavBasicAccessibilityDemoComponent, data: { fullscreen: true } },
	{ path: 'sidenav/dual', component: SidenavDualAccessibilityDemoComponent, data: { fullscreen: true } },
	{ path: 'sidenav/mobile', component: SidenavMobileAccessibilityDemoComponent, data: { fullscreen: true } },
	{ path: 'slide-toggle', component: SlideToggleAccessibilityDemoComponent },
	{ path: 'slider', component: SliderAccessibilityDemoComponent },
	{ path: 'snack-bar', component: SnackBarAccessibilityDemoComponent },
	{ path: 'tabs', component: TabsAccessibilityDemo, children: TABS_DemoComponent_ROUTES },
	{ path: 'toolbar', component: ToolbarAccessibilityDemoComponent },
	{ path: 'table', component: TableAccessibilityDemoComponent },
	{ path: 'tooltip', component: TooltipAccessibilityDemoComponent },
];
