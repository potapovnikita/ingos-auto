import { Component, OnInit } from '@angular/core';
import { Destroyable } from '@ingos/core';

@Component({
  selector: 'car-brand-component',
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.scss']
})
export class CarBrandComponent extends Destroyable implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
