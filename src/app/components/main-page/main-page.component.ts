import { Component, input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
import { ApiCallsService } from '../../services/api-calls.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  imports: [InputComponent, OutputComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  synonyms: string[] = [];
  selected_synonym: string | null = null
  loading = false;
  error: string | null = null;
  nothing_submitted = true;

  constructor(private api: ApiCallsService) {}

  onSubmitted(text: string) {
    this.loading = true;
    this.error = null;
    this.nothing_submitted = false;

    this.api.synonyms(text, 20)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (words) => (this.synonyms = words),
        error: (e) => (this.error = 'Datamuse request failed (network/CORS?)'),
      });
  }

  onSynonymSelected(text: string) {
    this.selected_synonym = text;

  }

  

}
