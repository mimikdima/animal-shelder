import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalShelderComponent } from './animal-shelder.component';

describe('AnimalShelderComponent', () => {
  let component: AnimalShelderComponent;
  let fixture: ComponentFixture<AnimalShelderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalShelderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalShelderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
