import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar2',
  templateUrl: './side-navbar2.component.html',
  styleUrls: ['./side-navbar2.component.css'],
})
export class SideNavbar2Component implements OnInit {
  bColor: boolean = false;
  toggleSidebar: boolean = false;
  mode: string = 'Dark Mode';
  modeStatus: boolean = false;
  constructor() {}

  ngOnInit() {}

  onToggle() {
    this.toggleSidebar = !this.toggleSidebar;
  }

  onModeSwitch() {
    this.bColor = !this.bColor;
    this.modeStatus = this.bColor ? true : false;
  }
}
