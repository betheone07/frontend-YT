import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvideosComponent } from './showvideos.component';

describe('ShowvideosComponent', () => {
  let component: ShowvideosComponent;
  let fixture: ComponentFixture<ShowvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
