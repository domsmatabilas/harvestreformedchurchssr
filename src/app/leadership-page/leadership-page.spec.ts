import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipPage } from './leadership-page';

describe('LeadershipPage', () => {
  let component: LeadershipPage;
  let fixture: ComponentFixture<LeadershipPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
