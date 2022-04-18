import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gc-web-components',
  template: `
  <input type="button" class="button" value="Input Button">

  `,
  styles: [
    `
    .button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  `,
  ]
})
export class GcWebComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
