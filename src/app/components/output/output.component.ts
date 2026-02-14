
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Input() result = '';
  @Input() loading = false;
  @Input() error: string | null = null;
}
