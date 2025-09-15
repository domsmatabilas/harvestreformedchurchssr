import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonDetailsPage } from './sermon-details-page';

describe('SermonDetailsPage', () => {
  let component: SermonDetailsPage;
  let fixture: ComponentFixture<SermonDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SermonDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
