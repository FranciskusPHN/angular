import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCmpComponent } from './common-cmp.component';

describe('CommonCmpComponent', () => {
  let component: CommonCmpComponent;
  let fixture: ComponentFixture<CommonCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
