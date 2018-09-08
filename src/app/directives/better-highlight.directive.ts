import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightedColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; 
  @HostBinding('style.fontSize') fontSize: string = '10px'; 

  ngOnInit() { 
    //this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow' ); 
    this.backgroundColor = this.defaultColor; 
  }

  @HostListener('mouseenter') mouseover(evenData: Event){
    //this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow' ); 
    this.backgroundColor = this.highlightedColor;
    this.fontSize = "20px";
  }

  @HostListener('mouseleave') mouseout(evenData: Event){
    //this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent' ); 
    this.backgroundColor = this.defaultColor;
    this.fontSize = '10px'; 
  }
}
