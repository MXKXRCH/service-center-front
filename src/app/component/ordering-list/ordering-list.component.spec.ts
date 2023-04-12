import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingListComponent } from './ordering-list.component';

describe('OrderingListComponent', () => {
  let component: OrderingListComponent;
  let fixture: ComponentFixture<OrderingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
