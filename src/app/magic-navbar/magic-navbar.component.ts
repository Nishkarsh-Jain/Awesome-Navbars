import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-navbar',
  templateUrl: './magic-navbar.component.html',
  styleUrls: ['./magic-navbar.component.css'],
})
export class MagicNavbarComponent implements OnInit {
  c;

  list: any = document.querySelector('.list');
  constructor() {}

  ngOnInit() {}

  onSelect() {
    this.list.foreach((item) => item.classList.remove('active'));
  }
}
