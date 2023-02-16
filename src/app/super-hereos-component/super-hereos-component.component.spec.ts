import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHereosComponentComponent } from './super-hereos-component.component';

describe('SuperHereosComponentComponent', () => {
  let component: SuperHereosComponentComponent;
  let fixture: ComponentFixture<SuperHereosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHereosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHereosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
