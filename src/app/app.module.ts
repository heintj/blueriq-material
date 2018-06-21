import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { BlueriqComponents, BlueriqModule } from '@blueriq/angular';
import { V1BackendModule } from '@blueriq/angular/backend/v1';
import { BlueriqFormsModule } from '@blueriq/angular/forms';
import { TextItemModule } from '@blueriq/angular/textitems';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { AppComponent } from './app.component';
import { ElementComponent } from './blueriq/generic/element/element.component';
import { MomentTransformer } from './blueriq/generic/moment/moment-transformer';
import { ContainerComponent } from './blueriq/material/container/container.component';
import { DocumentLinkComponent } from './blueriq/material/document-link/document-link.component';
import { DocumentLinkService } from './blueriq/material/document-link/document-link.service';
import { ButtonComponent } from './blueriq/material/form-controls/button/button.component';
import { CheckboxComponent } from './blueriq/material/form-controls/checkbox/checkbox.component';
import { DatepickerComponent } from './blueriq/material/form-controls/datepicker/datepicker.component';
import { DateTimepickerComponent } from './blueriq/material/form-controls/datetimepicker/datetimepicker.component';
import { CurrencyFieldComponent } from './blueriq/material/form-controls/input-field/currency/currency.component';
import { IntegerFieldComponent } from './blueriq/material/form-controls/input-field/integer/integer.component';
import { NumberFieldComponent } from './blueriq/material/form-controls/input-field/number/number.component';
import { PercentageFieldComponent } from './blueriq/material/form-controls/input-field/percentage/percentage.component';
import { StringFieldComponent } from './blueriq/material/form-controls/input-field/string/string.component';
import { RadioButtonComponent } from './blueriq/material/form-controls/radio-button/radio-button.component';
import { SelectComponent } from './blueriq/material/form-controls/select/select.component';
import { SlideToggleComponent } from './blueriq/material/form-controls/slide-toggle/slide-toggle.component';
import { MaterialModule } from './blueriq/material/material/material.module';
import { PageComponent } from './blueriq/material/page/page.component';
import { PresentationStyles } from './blueriq/material/presentationstyles/presentationstyles';
import { PaginationComponent } from './blueriq/material/table/pagination/table.pagination.component';
import { TableSearchComponent } from './blueriq/material/table/search/table.search.component';
import { TableSortComponent } from './blueriq/material/table/sort/table.sort.component';
import { TableComponent } from './blueriq/material/table/table.component';
import { TableReadonlyComponent } from './blueriq/material/table/table.readonly.component';
import { TextItemComponent } from './blueriq/material/textitem/textitem.component';
import { ProjectComponent } from './blueriq/project/project.component';
import { Configuration } from './configuration';

const routes: Routes = [
  { path: 'session/:sessionId', component: ProjectComponent },
  { path: 'shortcut/:shortcut', component: ProjectComponent },
  { path: 'flow/:project/:flow', component: ProjectComponent },
  { path: 'flow/:project/:flow/:version', component: ProjectComponent },
  { path: 'flow/:project/:flow/:version/:languageCode', component: ProjectComponent },
  { path: '**', redirectTo: 'shortcut/default', pathMatch: 'full' }
];

const BQ_COMPONENTS = [
  ButtonComponent,
  SelectComponent,
  DatepickerComponent,
  CheckboxComponent,
  ContainerComponent,
  CurrencyFieldComponent,
  DocumentLinkComponent,
  IntegerFieldComponent,
  NumberFieldComponent,
  SelectComponent,
  DateTimepickerComponent,
  PageComponent,
  PaginationComponent,
  PercentageFieldComponent,
  RadioButtonComponent,
  SelectComponent,
  SlideToggleComponent,
  StringFieldComponent,
  TableComponent,
  TableReadonlyComponent,
  TableSearchComponent,
  TableSortComponent,
  TextItemComponent
];

const BQ_MAT_COMPONENTS = [
  ElementComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BQ_COMPONENTS,
    BQ_MAT_COMPONENTS

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BlueriqModule.forRoot(),
    V1BackendModule.forRoot({
      baseUrl: Configuration.BASE_URL
    }),
    BrowserAnimationsModule,
    BlueriqFormsModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
    TextItemModule
  ],
  providers: [
    BlueriqComponents.register(BQ_COMPONENTS),
    DocumentLinkService,
    MomentTransformer,
    PresentationStyles
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
