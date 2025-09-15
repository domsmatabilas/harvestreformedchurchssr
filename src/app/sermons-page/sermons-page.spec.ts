import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonsPage } from './sermons-page';

describe('SermonsPage', () => {
  let component: SermonsPage;
  let fixture: ComponentFixture<SermonsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SermonsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
