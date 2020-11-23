import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrenosMoviesComponent } from './estrenos-movies.component';

describe('EstrenosMoviesComponent', () => {
  let component: EstrenosMoviesComponent;
  let fixture: ComponentFixture<EstrenosMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrenosMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrenosMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
