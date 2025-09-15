import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadImage } from './load-image';

describe('LoadImage', () => {
  let component: LoadImage;
  let fixture: ComponentFixture<LoadImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
