import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar1',
  templateUrl: './side-navbar1.component.html',
  styleUrls: ['./side-navbar1.component.css'],
})
export class SideNavbar1Component implements OnInit {
  sidebarValue: boolean = false;
  searchValue: boolean = false;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.sidebarValue = !this.sidebarValue;
  }
}
