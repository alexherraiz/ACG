import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaseFilterComponent } from './greasefilter.component';

describe('GreaseFilterComponent', () => {
  let component: GreaseFilterComponent;
  let fixture: ComponentFixture<GreaseFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreaseFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
