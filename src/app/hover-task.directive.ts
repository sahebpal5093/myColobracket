import { Directive, Renderer2,ElementRef,HostListener,OnInit } from '@angular/core';


@Directive({
  selector: '[appHoverTask]'
})
export class HoverTaskDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) {     }
    ngOnInit() {
     
    }
    @HostListener('mouseenter') mouseover(eventData:Event){
      this.renderer.setStyle(this.elRef.nativeElement,'fontSize','30px');
    }
    @HostListener('mouseleave') mouseleave(){
      this.renderer.setStyle(this.elRef.nativeElement,'fontSize','20px');
    }
}
