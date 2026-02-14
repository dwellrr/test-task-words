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

  submit() {
    const text = this.value.trim();
    if (!text) return;
    console.log("input is emmitting...");
    this.submitted.emit(text);
  }
}
