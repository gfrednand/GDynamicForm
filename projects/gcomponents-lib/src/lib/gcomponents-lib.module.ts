import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttachmentComponent } from './dynamic-forms-components/attachment/attachment.component';
import { ButtonComponent } from './dynamic-forms-components/button/button.component';
import { CheckboxComponent } from './dynamic-forms-components/checkbox/checkbox.component';
import { DateComponent } from './dynamic-forms-components/date/date.component';
import { InputComponent } from './dynamic-forms-components/input/input.component';
import { MainDynamicFormComponent } from './dynamic-forms-components/main-dynamic-form/main-dynamic-form.component';
import { RadiobuttonComponent } from './dynamic-forms-components/radiobutton/radiobutton.component';
import { SelectComponent } from './dynamic-forms-components/select/select.component';
import { TextareaComponent } from './dynamic-forms-components/textarea/textarea.component';
import { GComponentsLibComponent } from './gcomponents-lib.component';
import { MatSelectSearchComponent } from './mat-select-search/mat-select-search.component';
import { MaterialModule } from './material.module';
import { IsObservable } from './pipes/is-observable.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { WithLoadingPipe, WithLoadingNoObsCheckPipe } from './pipes/with-loading.pipe';



@NgModule({
  declarations: [
    GComponentsLibComponent,
    MainDynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    AttachmentComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareaComponent,
    MatSelectSearchComponent,

    // Pipes
    SearchPipe,
    IsObservable,
    WithLoadingPipe,
    WithLoadingNoObsCheckPipe,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    GComponentsLibComponent,
    MainDynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    AttachmentComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareaComponent,
    MatSelectSearchComponent,

    // Pipes
    SearchPipe,
    IsObservable,
    WithLoadingPipe,
    WithLoadingNoObsCheckPipe,]
})
export class GComponentsLibModule { }
