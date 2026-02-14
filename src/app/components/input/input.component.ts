import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() submitted = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();
  @Input() selected_synonym: string | null = null;

  @Input() value: string | null = '';
  copied = false;

  onSynonymInput(v: string) {
  this.value = v;
  this.copied = false;
}

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

  get wordCount(): number {
    if (this.value != null) {
      if (!this.value.trim()) return 0;

      return this.value
        .trim()
        .split(/\s+/)   // split by whitespace
        .length;
    }
    return 0;
  }

  get symCount(): number {
    if (this.value != null) {
      if (!this.value.trim()) return 0;

      return this.value.length;
    }
    return 0;
  }

  async copyToClipboard() {
  if (!this.value?.trim()) return;

  try {
    await navigator.clipboard.writeText(this.value);
    this.copied = true;
  } catch (err) {
    console.error('Clipboard failed', err);
  }
}
}
