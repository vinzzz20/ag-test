import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveditemComponent } from './saveditem.component';

describe('SaveditemComponent', () => {
  let component: SaveditemComponent;
  let fixture: ComponentFixture<SaveditemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveditemComponent]
    });
    fixture = TestBed.createComponent(SaveditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
