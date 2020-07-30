import { Directive, ElementRef, Renderer2 } from '@angular/core';

const BUTTON_ATTRIBUTES: string[] = [
  'bg-blue-500',
  'hover:bg-blue-700',
  'text-white',
  'font-bold',
  'py-2',
  'px-4',
  'rounded',
  'h-10',
];

@Directive({
  selector: '[ngTailButton]',
})
export class NgTailButtonDirective {
  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    for (const attr of BUTTON_ATTRIBUTES) {
      renderer.addClass(hostElement.nativeElement, attr);
    }
  }
}
