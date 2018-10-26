import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { BqKeyDirective } from '@shared/directive/bq-key/bq-key.directive';
import { BqContainerDirective } from '@shared/directive/container/bq-container.directive';
import { BqIconDirective } from '@shared/directive/icon/icon.directive';

import { ValidationEffect } from '@shared/effects/validation/validation.effect';

const SHARED_COMPONENTS = [
  BqKeyDirective,
  BqIconDirective,
  BqContainerDirective
];

@NgModule({
  declarations: [
    SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      ValidationEffect
    ]),

    /* Material Modules */
    MatSnackBarModule // used in validation.effect
  ],
  exports: [
    SHARED_COMPONENTS, CommonModule, FormsModule
  ]
})
export class SharedModule {
}
