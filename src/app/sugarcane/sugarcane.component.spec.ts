import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarcaneComponent } from './sugarcane.component';

describe('SugarcaneComponent', () => {
  let component: SugarcaneComponent;
  let fixture: ComponentFixture<SugarcaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarcaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarcaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
