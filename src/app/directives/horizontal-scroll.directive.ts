import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]'
})
export class HorizontalScrollDirective {

  constructor(private el:ElementRef) { }
  @HostListener('wheel',['$event']) onWheelScroll(event: WheelEvent){
    event.preventDefault()
    this.el.nativeElement.scrollLeft += event.deltaY
  }

}
