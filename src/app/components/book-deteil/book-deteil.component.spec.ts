import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeteilComponent } from './book-deteil.component';

describe('BookDeteilComponent', () => {
  let component: BookDeteilComponent;
  let fixture: ComponentFixture<BookDeteilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDeteilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDeteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
