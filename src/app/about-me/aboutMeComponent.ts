import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '',
  templateUrl: './about-me.html',
})
export class AboutMeComponent implements OnInit {
  name: string;

  constructor() {
    this.name = 'Antoine de Villers';
  }

  ngOnInit(): void {
  }

}
