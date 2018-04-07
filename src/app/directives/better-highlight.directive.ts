import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit() { 
    //this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow' ); 
  }

  @HostListener('mouseenter') mouseover(evenData: Event){
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow' ); 
  }

  @HostListener('mouseleave') mouseout(evenData: Event){
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent' ); 
  }
}
