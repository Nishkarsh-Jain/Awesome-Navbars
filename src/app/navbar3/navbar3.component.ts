import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css'],
})
export class Navbar3Component implements OnInit {
  value: boolean = false;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.value = !this.value;
  }
}
