import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular';
  myForm: FormGroup;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.min(18)]
    });
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
