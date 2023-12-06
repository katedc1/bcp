import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSidebarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  selectHamburger(){
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
