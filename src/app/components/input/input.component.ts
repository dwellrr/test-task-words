import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() submitted = new EventEmitter<string>();

  value = '';

  submit(ta: HTMLTextAreaElement) {
    const start = ta.selectionStart ?? 0;
    const end = ta.selectionEnd ?? 0;

    const hasSelection = end > start;
    const raw = hasSelection
      ? ta.value.slice(start, end)
      : ta.value;

    const text = raw.trim();
    if (!text) return;

    this.submitted.emit(text);
  }
}
