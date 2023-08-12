import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGalleriaComponent } from './smart-galleria.component';

describe('SmartGalleriaComponent', () => {
  let component: SmartGalleriaComponent;
  let fixture: ComponentFixture<SmartGalleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartGalleriaComponent]
    });
    fixture = TestBed.createComponent(SmartGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
