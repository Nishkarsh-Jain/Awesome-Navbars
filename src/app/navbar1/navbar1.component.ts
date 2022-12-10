import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css'],
})
export class Navbar1Component implements OnInit {
  value: boolean = false;
  constructor() {}
  classes = {
    show_menu: this.value
  };
  ngOnInit() {}

  //   const bar = document.querySelector(".fa-bars");
  // const menu = document.querySelector(".menu");

  // bar.addEventListener("click", () => {
  //   menu.classList.toggle("show-menu");
  // });

  onClick() {
    this.value = !this.value;
  }
}
