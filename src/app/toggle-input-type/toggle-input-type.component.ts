import { Component, OnInit } from '@angular/core';
import { Toggle } from './toggle.model';


@Component({
  selector: 'app-toggle-input-type',
  templateUrl: './toggle-input-type.component.html',
  styleUrls: ['./toggle-input-type.component.css']
})
export class ToggleInputTypeComponent implements OnInit {

  checked: boolean = true;
  isType: boolean;
  type: string = 'password';
  test: Toggle;

  constructor() { }

  ngOnInit(): void {
  }

  toggleButton(event) {
    if (event.checked) {
      this.type = 'password'
    } else {
      this.type = 'text'
    }
  }

}
