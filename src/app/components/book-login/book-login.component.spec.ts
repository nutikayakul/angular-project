import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLoginComponent } from './book-login.component';

describe('BookLoginComponent', () => {
  let component: BookLoginComponent;
  let fixture: ComponentFixture<BookLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
