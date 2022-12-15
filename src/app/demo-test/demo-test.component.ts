import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrls: ['./demo-test.component.css'],
})
export class DemoTestComponent implements OnInit {
  value: boolean = false;
  constructor() {}
  modeStatus: boolean = false;
  ngOnInit() {}

  onClick() {
    this.value = !this.value;
  }
}
