import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GComponentsLibComponent } from './gcomponents-lib.component';

describe('GComponentsLibComponent', () => {
  let component: GComponentsLibComponent;
  let fixture: ComponentFixture<GComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GComponentsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
