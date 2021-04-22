import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.html'
})
export class HeaderComponent implements OnInit {
title = 'Portfolio';
  constructor() {

  }

  ngOnInit(): void {
  }

}
