import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroesListComponentComponent } from './super-heroes-list-component.component';

describe('SuperHeroesListComponentComponent', () => {
  let component: SuperHeroesListComponentComponent;
  let fixture: ComponentFixture<SuperHeroesListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroesListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
