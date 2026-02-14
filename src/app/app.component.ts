import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "./components/input/input.component";
import { OutputComponent } from "./components/output/output.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent, OutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-task-words';
}
