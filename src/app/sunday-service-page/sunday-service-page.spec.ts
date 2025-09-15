import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayServicePage } from './sunday-service-page';

describe('SundayServicePage', () => {
  let component: SundayServicePage;
  let fixture: ComponentFixture<SundayServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SundayServicePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundayServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
