import {Component, Host} from '@angular/core';
import {BlueriqComponent } from '@blueriq/angular';
import {Field} from '@blueriq/core';
import {BlueriqFormBuilder} from '@blueriq/angular/forms';


@Component({
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

@BlueriqComponent({
  type: Field//,
  //selector: '[dataType=string]'
})
export class FieldComponent {

  formControl = this.form.control(this.field, {updateOn: 'blur'});

  constructor(@Host() public field: Field, private form: BlueriqFormBuilder) {
    console.log(field);
  }

}
