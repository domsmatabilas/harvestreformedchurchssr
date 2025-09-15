import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleStudyPage } from './bible-study-page';

describe('BibleStudyPage', () => {
  let component: BibleStudyPage;
  let fixture: ComponentFixture<BibleStudyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleStudyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleStudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
