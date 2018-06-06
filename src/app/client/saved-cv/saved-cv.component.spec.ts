import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCvComponent } from './saved-cv.component';

describe('SavedCvComponent', () => {
  let component: SavedCvComponent;
  let fixture: ComponentFixture<SavedCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
