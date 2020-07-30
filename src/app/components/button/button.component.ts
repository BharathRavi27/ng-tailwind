import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';

const BUTTON_ATTRIBUTES: string[] = [
  'text-white',
  'font-bold',
  'py-2',
  'px-4',
  'rounded',
  'h-10',
];
const DEFAULT_COLOR = 'bg-blue-700';
const COLORS = [
  { label: 'primary', color: 'bg-blue-500' },
  { label: 'secondary', color: 'bg-teal-700' },
  { label: 'accent', color: 'bg-green-700' },
  { label: 'warn', color: 'bg-red-700' },
];

@Component({
  selector: 'button[tail-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    for (const attr of BUTTON_ATTRIBUTES) {
      renderer.addClass(hostElement.nativeElement, attr);
    }
  }

  @Input('color') color: string = DEFAULT_COLOR;

  ngOnInit(): void {
    this.renderer.addClass(
      this.hostElement.nativeElement,
      COLORS.find((color) => this.color === color.label).color
    );
  }
}
