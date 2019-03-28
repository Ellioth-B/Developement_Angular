import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appLight]'
})
export class LightDirective {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit()
  {
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '2em');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData : Event) //event quand souris survole
  {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '2em'); // ce qui se passe qd survole
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData : Event) //event qd souris ne survole plus
  {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '1em');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'grey');
  }


}
