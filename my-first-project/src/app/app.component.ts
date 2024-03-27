import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.formGroup = new FormGroup({
          date: new FormControl<Date | null>(null)
      });
  } 
}
