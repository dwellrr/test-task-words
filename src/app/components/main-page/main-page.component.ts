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
    result = '';
  loading = false;
  error: string | null = null;

  constructor(private api: ApiCallsService) {}

  onSubmitted(text: string) {
    this.loading = true;
    this.error = null;

    this.api.submit(text)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => (this.result = res.result),
        error: () => (this.error = 'Request failed'),
      });
  }

}
