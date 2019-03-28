import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[appShowMovies]'
})
export class ShowMoviesDirective {

  @Input() set appShowMovies(condition:boolean)
  {
    if(condition)
    {
      this.vwRef.createEmbeddedView(this.tplRef);
    }else
    {
      this.vwRef.clear();
    }
  }

  constructor(private tplRef: TemplateRef <any>, private vwRef: ViewContainerRef) { }

}
