import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReceiptComponent } from './booking-receipt.component';

describe('BookingReceiptComponent', () => {
  let component: BookingReceiptComponent;
  let fixture: ComponentFixture<BookingReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingReceiptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
