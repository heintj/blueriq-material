import { Component, Host } from '@angular/core';
import { BlueriqComponent } from '@blueriq/angular';
import { Container } from '@blueriq/core';

@Component({
  template: ''
})
@BlueriqComponent({
  type: Container,
  selector: '#searchContainer'
})
export class TableSearchComponent {

  constructor(@Host() public container: Container) {
  }

}