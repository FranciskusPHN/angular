import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmpComponent } from './detail-cmp.component';

describe('DetailCmpComponent', () => {
  let component: DetailCmpComponent;
  let fixture: ComponentFixture<DetailCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
