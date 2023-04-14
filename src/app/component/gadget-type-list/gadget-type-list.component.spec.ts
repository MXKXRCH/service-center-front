import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetTypeListComponent } from './gadget-type-list.component';

describe('GadgetTypeListComponent', () => {
  let component: GadgetTypeListComponent;
  let fixture: ComponentFixture<GadgetTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GadgetTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
