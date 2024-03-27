import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrodService } from './../../service/crod.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;
  

  constructor(
    public fromBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crodService: CrodService,
  ) {
    this.bookForm = this.fromBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crodService.AddBook(this.bookForm.value)
    .subscribe(() => {
      console.log("Data added successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/book-list'))
    }, (err) => {
      console.log(err);
    })
  }

}
