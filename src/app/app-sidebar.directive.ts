import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAppSidebar]',
  exportAs: 'appAppSidebar'
})
export class AppSidebarDirective {

  @HostBinding('class.is-open') click=false;
  constructor() { }


  @HostListener('click') onClic() {
    this.click = !this.click;
  }
}
