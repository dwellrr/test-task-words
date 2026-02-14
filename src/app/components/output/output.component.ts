
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Input() nothing_submitted = true;
  @Input() items: string[] = [];
  @Input() loading = false;
  @Input() error: string | null = null;

  @Output() useWord = new EventEmitter<string>();

  selected: string | null = null;

  select(word: string) {
    this.selected = word;
  }

  useSelected(word: string) {
    this.useWord.emit(word);
  }
}
