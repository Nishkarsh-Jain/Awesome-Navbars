import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Navbar1Component } from './navbar1/navbar1.component';
import { SideNavbar1Component } from './side-navbar1/side-navbar1.component';
import { SideNavbar2Component } from './side-navbar2/side-navbar2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Navbar1Component, SideNavbar1Component, SideNavbar2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
