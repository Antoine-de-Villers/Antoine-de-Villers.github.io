import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: './my-footer.html'
})
export class FooterComponent implements OnInit {
signature : string;
  constructor() {
    this.signature = 'Antoine de Villers @2021';
  }

  ngOnInit(): void {
  }

}
