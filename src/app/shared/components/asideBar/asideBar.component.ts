import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-asideBar',
  templateUrl: './asideBar.component.html',
  styleUrls: ['./asideBar.component.scss']
})
export class AsideBarComponent implements OnInit {

  isAsideOpen: boolean = true;
  showFiller: boolean = false;
  constructor(public elRef: ElementRef, private renderer: Renderer2, commonService: ServiceService) { }

  ngOnInit(): void {
    const buttonElements = this.elRef.nativeElement.querySelectorAll('.aside-button');
    buttonElements.forEach((buttonElement: HTMLElement) => {
      this.renderer.listen(buttonElement, 'click', () => {
        this.closeAsideOnClickButton();
      });
    });
  }

  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }

  closeAsideOnClickButton() {
    if (window.innerWidth <= 930) {
      this.isAsideOpen = !this.isAsideOpen;
    }
  }
}
