import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '',
  templateUrl: './about-me.html',
})
export class AboutMeComponent implements OnInit {
  name: string;
  description: string;

  constructor() {
    this.name = 'Antoine de Villers';
    this.description = "Bonjour, je suis un analyste en Assurance Qualité qui détient un background en développement web."
  }

  ngOnInit(): void {
  }

}
