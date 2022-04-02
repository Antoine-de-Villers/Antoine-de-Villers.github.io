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
    this.description = "Bonjour, je suis un analyste en Assurance Qualité Logicielle avec un background en développement web Angular. "
  }

  ngOnInit(): void {
  }

}
