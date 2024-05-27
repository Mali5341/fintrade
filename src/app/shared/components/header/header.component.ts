import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
  }
}
